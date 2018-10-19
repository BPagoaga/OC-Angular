import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostListComponent } from "./post-list/post-list.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PostListComponent
  },
  {
    path: "new",
    component: PostFormComponent
  },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "**", redirectTo: "books" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
