import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "../services/posts.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: any) => (this.posts = posts)
    );
    this.postService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(["/new"]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
