import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { CommonModule } from '@angular/common'; // Importe CommonModule pour ngFor
import { ChatbotService } from '../services/chatbot.service'; // Importe le service

@Component({
  selector: 'app-chatbot',
  standalone: true, // Composant autonome
  imports: [FormsModule, HttpClientModule, CommonModule], // Ajoute CommonModule ici pour *ngFor
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: string[] = [];
  userInput: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(`Vous: ${this.userInput}`);
      this.chatbotService.getResponse(this.userInput).subscribe(response => {
        this.messages.push(`Chatbot: ${response}`);
      });
      this.userInput = '';
    }
  }
}
