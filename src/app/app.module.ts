import { VersionManagerModule } from './version-manager/version-manager.module';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseModule } from './firebase/firebase';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    AppRoutingModule,
    VersionManagerModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
