import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { User } from "../models/user";
import { PostsService } from "../services/posts.service";
import { Subscriber, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(
    private postService: PostsService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: any) => {
        posts.map(post => {
          this.http
            .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .subscribe((user: User) => {
              this.posts.push(
                new Post({
                  title: post.title,
                  body: post.body,
                  author: user.name
                })
              );
            });
        });
      }
    );
    this.postService.emitPosts();
  }

  onNewPost() {
    console.log("navigate");
    this.router.navigate(["/new"]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
