import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/_services/auth.service';
import { first } from 'rxjs/operators';
import { NotificationService } from '../shared/_services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  loading: boolean;
  hide = true;
  returnUrl: any;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifyBar: NotificationService,
    ) {
      if (this.authService.currentUserValue) {
        this.router.navigate(['']);
      }
     }

  ngOnInit() {
    // console.log('get here');
    this.loading = false;
    this.userLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
// convenience getter for easy access to form fields
  get f() { return this.userLogin.controls; }

  onLogin() {
    if (this.userLogin.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            const message = error.error['non_field_errors'][0];
            console.log(message);
            this.loading = false;
            this.notifyBar.errorNotify(message, null);
          }
        );
  }

}
