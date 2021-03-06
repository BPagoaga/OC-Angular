import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { FormsModule } from "@angular/forms";
import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from "./auth/auth.component";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { SingleAppareilComponent } from "./single-appareil/single-appareil.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ChildComponentComponent } from './child-component/child-component.component';

const appRoutes: Routes = [
  { path: "appareils", component: AppareilViewComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AuthComponent },
  { path: "appareils/:id", component: SingleAppareilComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    ChildComponentComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
