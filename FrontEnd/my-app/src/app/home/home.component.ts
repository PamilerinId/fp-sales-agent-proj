import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService } from '../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user['user'];
    });
   }

  ngOnInit() {
  }

}
