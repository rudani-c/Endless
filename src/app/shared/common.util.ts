export class CommonUtil {

  static compareProp(prop: string): any {
    return (a: any, b: any) => {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

}
