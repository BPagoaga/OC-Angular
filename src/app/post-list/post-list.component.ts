import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { User } from "../user";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: object[] = [];

  constructor() {}

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(json => {
        json.map(post => {
          fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(data => data.json())
            .then(user => new User(user))
            .then(user => {
              post.author = user;
              this.posts.push(new Post(post));
            });
        });
      });
  }
}
