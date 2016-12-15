import { AngularFireModule, AuthMethods } from 'angularfire2';
import { ModuleWithProviders } from '@angular/core';

const firebaseConfig = {
    apiKey: "AIzaSyDNTko0v8pULqT8bRYEoCdqfePmkEe2BPQ",
    authDomain: "wine-app-5f24b.firebaseapp.com",
    databaseURL: "https://wine-app-5f24b.firebaseio.com",
    storageBucket: "wine-app-5f24b.appspot.com",
    messagingSenderId: "1037033291996"
}


const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);