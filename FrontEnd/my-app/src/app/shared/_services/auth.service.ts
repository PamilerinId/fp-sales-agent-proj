import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import * as ApplicationSettings from 'tns-core-modules/application-settings';
import { User } from '../_models';
import { BehaviorSubject , Observable } from 'rxjs';
import { map, finalize, share } from 'rxjs/operators';
// import { WebSocketSubject } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // http options used for making API calls

  currentUser: Observable<User>;
  // error messages received from the login attempt
  errors: any = [];

  // base url taken from envronment variables

  // webSocket: WebSocketSubject<any>;
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

  // signup(userReg: Registration) {
  //   return this.http.post(`${this.apiUrl}/api/v1/rest-auth/registration/`, userReg, this.httpOptions);
  // }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/login/`,
     {username, password}, this.httpOptions)
        .pipe(map((loggedUser) => {
          if (loggedUser['user'] && loggedUser['token']) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(loggedUser));
            this.currentUserSubject.next(loggedUser['user']);
        }

          return loggedUser;
      }));
  }

  logout() {
    console.log('logout2');
    this.currentUserSubject.next(null);
    localStorage.clear();
    return this.http.post(`${this.apiUrl}/api/v1/rest-auth/logout`, this.httpOptions);
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
