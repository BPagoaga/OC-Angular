import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "../models/post";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.emitPosts();
      });
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(postEl => postEl === post);
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }
}
