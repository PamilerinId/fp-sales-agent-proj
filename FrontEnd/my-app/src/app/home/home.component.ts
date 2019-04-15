import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService, User } from '../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;

  enabled = false;

  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user['user'];
    });
   }

  //  get user details
  // capture emmitted value
  // animation of emmited val
  ngOnInit() {
  }

  openPanel() {
    this.enabled = true;
    // emit value to child
  }

  logout() {
    this.authService.logout();
  }

}
