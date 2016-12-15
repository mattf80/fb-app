import { VersionManagerComponent } from './version-manager.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const vmRoutes: Routes = [
 
  { path: 'versions', component: VersionManagerComponent },
  { path: '', redirectTo: '/versions', pathMatch:"full"}
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