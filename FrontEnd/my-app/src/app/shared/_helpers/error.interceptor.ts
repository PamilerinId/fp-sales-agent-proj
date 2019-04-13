import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { AuthService } from '../_services/auth.service';
import { NotificationService } from '../_services/notification.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        public notifyBar: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                //   console.log('all looks good');
                  // http response status code
                //   console.log(event);
                  // shows success snackbar with green background
                  this.notifyBar.successNotify(event.statusText, 'Close');
                }
              }, error => {
                 // http response status code
                 if (error.status === 401) {
                    // auto logout if 401 response returned from api
                    // this.authService.logout();
                    // location.reload(true);
                    this.notifyBar.errorNotify(error.message, 'Reloading');
                }
                // console.log('show error message');
                // show error snackbar with red background
              })
            );
    }
}
