import { Component, OnInit } from "@angular/core";
import { TestInterface } from "./test-interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, TestInterface {
  title = "app";
  isAuth = false;

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {}

  testMethod() {
    console.log('test méthode')
  }
}
