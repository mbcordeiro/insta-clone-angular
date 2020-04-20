import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit() {

    var firebaseConfig = {
      apiKey: "AIzaSyCNnwcOQmTwqtjpNWyMnjEy4QiedRPFz2Q",
      authDomain: "jta-instagram-clone-13218.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-13218.firebaseio.com",
      projectId: "jta-instagram-clone-13218",
      storageBucket: "jta-instagram-clone-13218.appspot.com",
      messagingSenderId: "991997699401",
      appId: "1:991997699401:web:3172a6880550d3314c6698"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
