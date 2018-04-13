import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-single-appareil",
  templateUrl: "./single-appareil.component.html",
  styleUrls: ["./single-appareil.component.scss"]
})
export class SingleAppareilComponent implements OnInit {
  name: string = "Appareil";
  status: string = "Statut";

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    // le + sert à caster l'appareil comme un nombre, c'est con ou bien ?
    let appareil = null;
    appareil = this.appareilService.getAppareilById(+id);

    if (!appareil) {
      this.router.navigate["not-found"];
    }

    this.name = appareil.name;
    this.status = appareil.status;
  }
}
