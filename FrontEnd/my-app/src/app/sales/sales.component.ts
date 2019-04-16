import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, NotificationService, User, Agent } from '../shared';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from '../shared/_models/plan.model';
import { UserService } from '../shared/_services/user.service';
import { SalesLog } from '../shared/_models/saleslog.model';

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
  postSales: FormGroup;
  log: SalesLog;
  agentObj: Agent;

  @Output() commishEvent = new EventEmitter<number>();

  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    // this.date = new Date().toLocaleDateString();
    this.currentUserSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user['user'];
    });
    this.userService.getAgent(this.currentUser.id).subscribe((data) => {
      // this.agentObj = data;
      console.log(data);
    });
    this.postSales = this.formBuilder.group({
      planSelect: Plan
      // planSelect: ['']
    });
   }

   get f() { return this.postSales.controls; }

  ngOnInit() {
    this.userService.getAllPlans().subscribe(
      (data) => {
        this.plans = data;
      });
    this.log.agent = this.agentObj;
  }

  onSalesLog() {
    this.log.plan_sold = this.f.planSelect.value;
    this.log.commission_made = 0.1 * this.log.plan_sold.cost;
    this.commishEvent.emit(this.log.commission_made);
    this.userService.createLogs(this.log).subscribe(
      (data) => {
        this.notifyBar.successNotify('Posted!! Go sell some more!', null);
      },
      (error) => {
        this.notifyBar.errorNotify('Something happened, Try Again', null);
      });
  }
  // how to get selected plan from
  // calculate and save commission wt other params to sales log
 //  get plans, post transactions
  // share calculated commish to parent comp... emit that!!

}
