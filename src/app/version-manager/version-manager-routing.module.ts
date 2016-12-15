import { AuthGuard } from './../login/guards/auth-guard';
import { UnauthGuard } from './../login/guards/unauth-guard';
import { VersionManagerComponent } from './version-manager.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const vmRoutes: Routes = [
 
  { path: 'versions', component: VersionManagerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(vmRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VersionManagerRoutingModule {}