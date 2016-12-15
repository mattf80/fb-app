import { VersionManagerRoutingModule } from './version-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionManagerComponent } from './version-manager.component';


@NgModule({
  imports: [
    CommonModule,
    VersionManagerRoutingModule
  ],
  declarations: [VersionManagerComponent]
})
export class VersionManagerModule { }
