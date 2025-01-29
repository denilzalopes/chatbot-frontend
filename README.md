# Chatbot-Frontend

Ce projet est une interface frontend pour un chatbot développé avec Angular. Il permet aux utilisateurs d'interagir avec un chatbot à travers une interface simple et intuitive. Le projet utilise Angular en tant que framework frontend, et peut être facilement intégré avec un backend pour répondre aux requêtes des utilisateurs.


## Description

Chatbot-Frontend est une application Angular qui permet d'envoyer et de recevoir des messages via un chatbot. L'utilisateur peut taper des messages, qui seront envoyés à un service backend, et recevoir une réponse sous forme de texte.

### Fonctionnalités
- Interface simple et claire.
- Communication avec un service backend via HTTP.
- Utilisation d'Angular pour la gestion des routes, des composants et des services.

## Prérequis

Avant de pouvoir lancer ce projet, tu dois avoir installé les outils suivants :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Angular CLI](https://angular.io/cli)

Tu peux vérifier si ces outils sont déjà installés sur ta machine en exécutant les commandes suivantes dans ton terminal :
```bash
node -v
ng version
```

## Installation

1. **Clone le repository**

   Clone le repository GitHub sur ta machine locale avec la commande suivante :
   ```bash
   git clone https://github.com/ton-utilisateur/chatbot-frontend.git
   ```

2. **Installe les dépendances**

   Ensuite, entre dans le dossier du projet et installe les dépendances avec npm :
   ```bash
   cd chatbot-frontend
   npm install
   ```

3. **Lance l'application**

   Enfin, lance le serveur de développement avec la commande :
   ```bash
   ng serve
   ```

   Par défaut, l'application sera accessible sur `http://localhost:4200/`.

## Utilisation

Lorsque tu lances l'application, tu accèdes à l'interface du chatbot où tu peux entrer des messages dans un champ de texte. Les messages sont envoyés au service backend (prérequis d'un backend configuré) et les réponses sont affichées dans la même interface.

L'application est structurée en composants Angular. Le composant principal `AppComponent` contient le `ChatbotComponent`, où la logique de communication avec le chatbot est gérée.

### Routes

- `/chatbot` : Affiche le chatbot.
- `/` : Redirige automatiquement vers `/chatbot`.


## Fonctionnement du service `ChatbotService`

Le service `ChatbotService` est responsable de la gestion des réponses du chatbot. Il contient un ensemble prédéfini de réponses pour certaines questions courantes, et renvoie une réponse par défaut si la question de l'utilisateur n'est pas comprise.

### Code du service

Le service est injecté dans le composant `ChatbotComponent` et gère la logique des réponses. Il possède un dictionnaire (`responses`) où les clés sont des questions courantes, et les valeurs sont les réponses correspondantes. Si une question n'est pas trouvée dans le dictionnaire, le service renvoie un message générique.



### Interaction avec le chatbot

Lorsque l'utilisateur tape une question dans l'interface, le composant `ChatbotComponent` appelle la méthode `getResponse` du service pour obtenir une réponse. Par exemple, si l'utilisateur tape "horaires", le service renverra la réponse `"Le musée est ouvert de 9h à 18h tous les jours."`.

## Contribuer

Les contributions sont les bienvenues ! Si tu souhaites contribuer à ce projet, voici les étapes à suivre :

1. Fork ce repository.
2. Crée une branche (`git checkout -b feature/nom-de-ta-fonctionnalité`).
3. Fais tes modifications et commite-les (`git commit -am 'Ajoute une nouvelle fonctionnalité'`).
4. Pousse tes changements (`git push origin feature/nom-de-ta-fonctionnalité`).
5. Crée une Pull Request sur GitHub.

## Licences

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
