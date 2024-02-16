import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ChatAppComponent } from './chat-app/chat-app.component'

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatAppComponent},
  {path: '**', redirectTo: 'home'},
];
