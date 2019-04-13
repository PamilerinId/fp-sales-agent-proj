import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: 'login',  component: LoginComponent, },
  { path: '', canActivate: [AuthGuard], component: HomeComponent, children: [
    { path: 'new-sales', canActivate: [AuthGuard], component: SalesComponent},
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
