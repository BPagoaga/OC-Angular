import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  isAuth: boolean = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(
    private appareilService: AppareilService,
    private router: Router
  ) {}

  ngOnInit() {
    // if (!this.isAuth) {
    //   this.router.navigate([""]);
    // }
    this.appareils = this.appareilService.getAppareils();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ?")) {
      this.appareilService.switchOffAll();
    }
  }
}
