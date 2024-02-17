import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  @Input({required: true})
  posts: Post[] = [];
}
