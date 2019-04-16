import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService, User, Agent } from '../shared';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  agentObj: Agent;

  commission: any;

  enabled = false;
  visible = false;


  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
    private userService: UserService,
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user['user'];
    });
   }

  ngOnInit() {
  }

  openPanel() {
    this.enabled = true;
  }

  getComish($event) {
    this.commission = $event;
  }

  logout() {
    this.authService.logout();
  }

}
