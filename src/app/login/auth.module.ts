import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './guards/auth-guard';
import { UnauthGuard } from './guards/unauth-guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [UnauthGuard]}
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})

export class AuthModule {}


export { AuthGuard };
export { AuthService };
export { UnauthGuard };