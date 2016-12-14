import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  item: any;

  constructor(af: AngularFire) {

   af.database.object('/wines').subscribe(
      wines => {
        this.item = wines;
    console.log(this.item);
      }
    )

  }
}
