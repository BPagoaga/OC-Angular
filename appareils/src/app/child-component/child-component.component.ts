import { Component, OnInit, Host } from "@angular/core";
import { AppComponent } from "../app.component";
import { TestInterface } from "../test-interface";

const TestInterface = {
  testMethod() {}
}

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"]
})
export class ChildComponentComponent implements OnInit {
  constructor(@Host() host: AppComponent) {
    // s'assure que le composant parent implémente l'interface
    Object.keys(TestInterface).forEach(method => {
      if (!Object.getPrototypeOf(host).hasOwnProperty(method)) {
        throw `The class ${Object.getPrototypeOf(host).constructor.name} must implements the method ${method}`;
      }
    })
  }

  ngOnInit() {
    console.log("toto");
  }
}
