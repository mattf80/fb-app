import { IssueManagerService } from './../services/issue-manager.service';
import { AutoFocusDirective } from './../directives/autofocus-directive';
import { FormsModule } from '@angular/forms';
import { VersionManagerRoutingModule } from './version-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionManagerComponent } from './version-manager.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueItemComponent } from './issue-item/issue-item.component';
import { IssueFormComponent } from './issue-form/issue-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VersionManagerRoutingModule
  ],
  declarations: [AutoFocusDirective, VersionManagerComponent, IssueListComponent, IssueItemComponent, IssueFormComponent],
  providers:[IssueManagerService]
})
export class VersionManagerModule { }
