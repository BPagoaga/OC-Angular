import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from "../models/post";
import { PostsService } from "../services/posts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      content: ""
    });
  }

  onSavePost() {
    const title = this.postForm.get("title").value;
    const author = this.postForm.get("author").value;
    const content = this.postForm.get("content").value;
    const post = new Post({ title, author, content });

    this.postsService.createPost(post);
    this.router.navigate(["/"]);
  }
}
