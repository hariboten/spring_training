import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  private listUrl = 'https://localhost/api/chat/list';
  private postUrl = 'https://localhost/api/chat/post';

  constructor(private http: HttpClient) { }

  fetchChatList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.listUrl);
  }

  post(post: Post): Observable<Post[]>{
    return this.http.post<Post[]>(this.postUrl, post);
  }
}
