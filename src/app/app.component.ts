import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDnUl8xM3ZXXmQif5NHCfSG5XaeEZCkEbg',
      authDomain: 'nicks-recipe-book.firebaseapp.com'
    });
  }
}
