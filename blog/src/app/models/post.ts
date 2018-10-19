export class Post {
  title: string;
  content: string;
  author: string;
  loveIts: number = 0;
  created_at: Date;

  constructor(post) {
    this.title = post.title;
    this.content = post.body;
    this.author = post.author;
    this.created_at = new Date();
  }
}
