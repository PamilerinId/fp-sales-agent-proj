import { Component, OnInit } from '@angular/core';
import { AuthService, NotificationService, User, Agent } from '../shared';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/_services/user.service';
import { Router } from '@angular/router';
import { Plan } from '../shared/_models/plan.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SalesLog } from '../shared/_models/saleslog.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User = new User;
  currentUserSubscription: Subscription;
  agentObj: any;

  commission: any;

  enabled = false;
  visible = false;

  date: string;
  visibility: any;
  plans: Plan[] = [];
  postSales: FormGroup;
  log: SalesLog = new SalesLog;

  constructor(
    private authService: AuthService,
    private notifyBar: NotificationService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    // this.date = new Date().toLocaleDateString();
    this.currentUserSubscription = this.authService.currentUser.subscribe((x) => {
      this.currentUser = x['user'];
    });
   }

   get f() { return this.postSales.controls; }

  ngOnInit() {
    this.getAgent().subscribe(_ => {});
    // this.loadPlans().subscribe(_ => {});
    this.userService.getAllPlans().subscribe(data => {
      this.plans = data;
    });
    this.postSales = this.formBuilder.group({
      planSelect : ['']
    });
      // planSelect: [''
   
    console.log(this.plans);
    }

  openPanel() {
    this.enabled = true;
  }

  onSalesLog() {
    this.log.plan_sold = this.f.planSelect.value;
    this.log.commission_made = 0.1 * this.log.plan_sold.cost;
    this.visible = true;
    this.userService.createLogs(this.log).subscribe(
      (data) => {
        this.notifyBar.successNotify('Posted!! Go sell some more!', null);
      },
      (error) => {
        this.notifyBar.errorNotify('Something happened, Try Again', null);
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getAgent() { // background load of user profile(api request)
    // TODO: perform this action in dashboard component
    const user_id = this.currentUser['id'];
    return this.userService.getAgent(this.currentUser.id).pipe(map(data => {
      this.agentObj = data;
      this.log.agent = this.agentObj;
      // console.log('iam agent', data);
    }));
  }

  loadPlans() {
    return this.userService.getAllPlans().pipe(map(data => {
        this.plans = data;
      }));
  }
}
