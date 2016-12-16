import { IIssue } from './../../models/issue';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {

  issues$: FirebaseListObservable<any>;

  constructor(af: AngularFire){
    this.issues$ = af.database.list('/issueHistory')
  }

}