import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importe Observable et of

@Injectable({
  providedIn: 'root' // Ce service est disponible dans toute l'application
})
export class ChatbotService {
  private responses: { [key: string]: string } = {
    "horaires": "Le musée est ouvert de 9h à 18h tous les jours.",
    "tarifs": "Le tarif standard est de 10€. Les étudiants bénéficient d'une réduction de 50%.",
    "expositions": "Actuellement, nous avons une exposition sur l'art moderne et une autre sur l'histoire ancienne.",
    "aide": "Je peux vous renseigner sur les horaires, les tarifs et les expositions. Que souhaitez-vous savoir ?"
  };

  constructor() {}

  getResponse(message: string): Observable<string> {
    const lowerCaseMessage = message.toLowerCase();
    const response = this.responses[lowerCaseMessage] || "Désolé, je ne comprends pas votre question. Pouvez-vous reformuler ?";
    return of(response); // Retourne une réponse simulée
  }
}
