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
    path: "posts",
    component: PostFormComponent
  },
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "**", redirectTo: "posts" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
