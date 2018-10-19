import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { PostFormComponent } from "./post-form/post-form.component";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
