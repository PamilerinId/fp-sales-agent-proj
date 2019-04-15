import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService, User } from '../shared';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from '../shared/_models/plan.model';
import { UserService } from '../shared/_services/user.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  date: string;
  visibility: any;
  currentUserSubscription: Subscription;
  currentUser: User;
  plans: Array<Plan>;

  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
    private userService: UserService,
  ) {
    // this.date = new Date().toLocaleDateString();
    this.currentUserSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user['user'];
    });
   }

  ngOnInit() {
    this.userService.getAllPlans().subscribe(
      (data) => {
        this.plans = data;
      });
  }

  logSales() {}
  // how to get selected plan from
  // calculate and save commission wt other params to sales log
 //  get plans, post transactions
  // share calculated commish to parent comp... emit that!!

}
