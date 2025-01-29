import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Ajoute RouterModule pour router-outlet
import { ChatbotComponent } from './chatbot/chatbot.component'; // Importe le composant Chatbot
import { CommonModule } from '@angular/common';  // Assure-toi que CommonModule est inclus

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ChatbotComponent, CommonModule],  // Ajoute RouterModule et ChatbotComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot-frontend';
}
