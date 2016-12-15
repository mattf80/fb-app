import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.css']
})
export class VersionManagerComponent implements OnInit {

  items: any[];

  constructor(private af: AngularFire) { 
   af.database.list('/versions')
    .subscribe(data => {
      console.log(data);
      this.items = data;
    })
   
  }

  ngOnInit() {
    
  }

}
