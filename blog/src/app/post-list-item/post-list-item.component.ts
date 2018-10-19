import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private postService: PostsService) {}

  ngOnInit() {}

  increaseLike() {
    this.post.loveIts += 1;
  }

  decreaseLike() {
    this.post.loveIts -= 1;
  }

  getBcg() {
    if (this.post.loveIts > 0) {
      return "green";
    } else if (this.post.loveIts < 0) {
      return "red";
    }

    return "";
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
