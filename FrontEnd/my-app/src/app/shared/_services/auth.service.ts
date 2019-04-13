import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from "environments/environment";
import * as ApplicationSettings from 'tns-core-modules/application-settings';
import { User } from '../_models/user.model';
import { Login } from '../_models/login.model';
import { BehaviorSubject , Observable } from 'rxjs';
import { map, finalize, share } from 'rxjs/operators';
import { Registration } from '../_models/registration.model';
import { WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // http options used for making API calls

  currentUser: Observable<User>;
  // error messages received from the login attempt
  errors: any = [];

  // base url taken from envronment variables

  webSocket: WebSocketSubject<any>;
  messages: Observable<any>;

  private apiUrl = environment.apiUrl;

  private httpOptions: any;

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signup(userReg: Registration) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/registration/`, userReg, this.httpOptions);
  }

  login(email: string, password: string) {
    return this.http.post<Login>(`${this.apiUrl}/api/v1/rest-auth/login/`,
     {email, password}, this.httpOptions)
        .pipe(map((loggedUser) => {
          if (loggedUser['user'] && loggedUser['token']) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            ApplicationSettings.setString('currentUser', JSON.stringify(loggedUser));
            this.currentUserSubject.next(loggedUser['user']);
        }

          return loggedUser;
      }));
  }

  // connect(): void {
  //   if (!this.webSocket || this.webSocket.closed) {
  //     this.webSocket = new WebSocketSubject("ws://localhost:8000/ws/repairs/");
  //     this.messages = this.webSocket.pipe(share());
  //     this.messages.subscribe(message => console.log(message));
  //   }
  // }

  logout() {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/logout`, null, this.httpOptions).pipe(
      finalize(() => {localStorage.removeItem('currentUser');
                      this.currentUserSubject.next(null); })
    );
  }

  recoverPwd(email: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/password/reset/`, {email}, this.httpOptions);
  }

  resetPwd(new_password1: string, new_password2: string, uid: string, token: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/password/reset/confirm/`, {new_password1,
                                                                                      new_password2,
                                                                                      uid, token});
  }

  verifyEmail(key: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/registration/verify-email/`, {key}, this.httpOptions);
  }

// Create Social Logins
  fb_login(access_token: string, code: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/facebook/`, {access_token, code}, this.httpOptions);
  }
  g_login(access_token: string, code: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/google/`, {access_token, code}, this.httpOptions);
  }
  t_login(access_token: string, token_secret: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/twitter/`, {access_token, token_secret},
     this.httpOptions);
  }
}
