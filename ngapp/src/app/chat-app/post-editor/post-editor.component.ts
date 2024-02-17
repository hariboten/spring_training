import { Component, EventEmitter, Output } from '@angular/core';
import { ChatAppService } from '../chat-app.service';
import { Post } from '../post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-editor.component.html',
  styleUrl: './post-editor.component.scss'
})
export class PostEditorComponent {

  constructor(private chatAppService: ChatAppService) {}

  @Output()
  onPost = new EventEmitter<Post[]>();


  postBody: string = "";

  post(): void {
    const post = new Post(this.postBody);
    this.postBody = "";
    this.chatAppService.post(post).subscribe({
      next: (posts:Post[]) => {
        this.onPost.emit(posts);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
