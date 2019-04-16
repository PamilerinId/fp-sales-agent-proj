import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { NotificationService } from '../_services/notification.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private authService: AuthService,
    private notifyBar: NotificationService
  ) { }


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // this.notifyBar.infoNotify('Welcome back!!', null);
        // authorised so return true
        return true;
    }
       // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }}).then(() => {
      this.notifyBar.errorNotify('You are not logged in', null);
    });
    return false;
  }
}
