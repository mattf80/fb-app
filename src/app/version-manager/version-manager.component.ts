import { IVersion, Version } from './../models/version';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.css']
})
export class VersionManagerComponent implements OnInit {

  @Output() createItem = new EventEmitter(false);
  title: string = '';
  items: any[];
  newItem: IVersion;
  private versions$: FirebaseListObservable<IVersion[]>;

  constructor(private af: AngularFire) {
    this.versions$ = af.database.list('/versions');
  }

  ngOnInit() {

  }


}


