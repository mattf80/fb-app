import { IVersion, Version } from './../models/version';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.css']
})
export class VersionManagerComponent implements OnInit {

  items: any[];
  private versions$: FirebaseListObservable<IVersion[]>;

  constructor(private af: AngularFire) { 
   this.versions$ = af.database.list('/versions'); 
   console.log(this.versions$);  
  }

  ngOnInit() {
       
  }

  addItem(item: string): firebase.Promise<any> {
    return this.versions$.push(new Version(item));
    
  }

}
