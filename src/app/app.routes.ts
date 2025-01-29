import { Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';

export const routes: Routes = [
  { path: 'chatbot', component: ChatbotComponent },
  { path: '', redirectTo: '/chatbot', pathMatch: 'full' } // Redirige vers le chatbot par défaut
];
