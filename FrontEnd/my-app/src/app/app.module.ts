import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor, AuthGuard } from './shared';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';

import {MatSnackBarModule, MatCardModule, MatSelectModule, MatButtonModule,
   MatIconModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
