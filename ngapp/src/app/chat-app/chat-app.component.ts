import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'


@Component({
  selector: 'app-chat-app',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chat-app.component.html',
  styleUrl: './chat-app.component.scss'
})
export class ChatAppComponent {

}
