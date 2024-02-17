import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostListComponent } from './post-list/post-list.component'
import { ChatAppService } from './chat-app.service';
import { Post } from './post';


@Component({
  selector: 'app-chat-app',
  standalone: true,
  imports: [RouterLink, PostEditorComponent, PostListComponent],
  templateUrl: './chat-app.component.html',
  styleUrl: './chat-app.component.scss'
})
export class ChatAppComponent implements OnInit {
  constructor(private chatAppService: ChatAppService) {
  }

  posts: Post[] = [];

  ngOnInit(): void{
    this.chatAppService.fetchChatList().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onPost(posts: Post[]): void{
    this.posts = posts;
  }
}
