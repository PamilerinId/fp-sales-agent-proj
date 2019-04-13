import { Injectable } from '@angular/core';
// import { SnackBar } from 'nativescript-snackbar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifyBar: SnackBar;

  // tslint:disable-next-line:no-empty
  constructor() {}

  // this function will open up snackbar on bottom middle position with custom background color (defined in css)
  successNotify(message: string, action: any) {
    this.notifyBar.simple(message, action);
  }
  errorNotify(message: string, action: any) {
     this.notifyBar.simple(message, action);
  //      {
  //    duration: 5000,
  //    panelClass: ["red-notifybar"], // TODO: Reload or retry option?
  //  });
  }
  infoNotify(message: string, action: any) {
    this.notifyBar.simple(message, action);
  //      {
  //    duration: 3000,
  //  });
  }
  // componentNotify(Comp: any) {
  //   this.notifyBar.openFromComponent(Comp);
  // }
}
