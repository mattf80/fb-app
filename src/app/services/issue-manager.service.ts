import { IIssue, Issue} from './../models/issue';
import { AuthService } from './../login/auth.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';




@Injectable()
export class IssueManagerService {
  visibleIssues$: Observable<IIssue[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredIssues$: FirebaseListObservable<IIssue[]>;
  private issues$: FirebaseListObservable<IIssue[]>;


  constructor(af: AngularFire, auth: AuthService) {
    const path = `/issueHistory`;

    this.issues$ = af.database.list(path);

    this.filteredIssues$ = af.database.list(path, {query: {
      orderByChild: 'issued',
      equalTo: this.filter$
    }});

    this.visibleIssues$ = this.filter$
      .switchMap(filter => filter === null ? this.issues$ : this.filteredIssues$);
  }


  filterIssues(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  createIssue(issue: Issue): firebase.Promise<any> {
    return this.issues$.push(issue);
  }

  removeIssue(issue: IIssue): firebase.Promise<any> {
    return this.issues$.remove(issue.$key);
  }

  updateIssue(issue: IIssue, changes: any): firebase.Promise<any> {
    return this.issues$.update(issue.$key, changes);
  }
}
