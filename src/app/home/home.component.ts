import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { CommonUtil } from '../shared/common.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stepsData = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getStepsData().subscribe(
      (data: any[]) => {
        this.setStepsData(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

  setStepsData(stepsData: any[]): void {
    stepsData.sort(CommonUtil.compareProp('stepNumber'));
    stepsData.forEach(d => {
      const obj: any = {};
      obj.stepNumber = d.stepNumber;
      d.versionContent.sort(CommonUtil.compareProp('effectiveDate'));
      const latestVersionContent = d.versionContent[d.versionContent.length - 1];
      obj.title = latestVersionContent.title;
      obj.body = latestVersionContent.body;
      this.stepsData.push(obj);
    });
  }

}
