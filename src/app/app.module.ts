import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDNTko0v8pULqT8bRYEoCdqfePmkEe2BPQ",
    authDomain: "wine-app-5f24b.firebaseapp.com",
    databaseURL: "https://wine-app-5f24b.firebaseio.com",
    storageBucket: "wine-app-5f24b.appspot.com",
    messagingSenderId: "1037033291996"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
