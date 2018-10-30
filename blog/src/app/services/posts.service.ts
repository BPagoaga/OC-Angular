import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "../models/post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  getPosts() {
    return this.posts;
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
