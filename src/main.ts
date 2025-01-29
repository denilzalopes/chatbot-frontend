import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Bootstrapping l'application en utilisant le composant racine (AppComponent) et les routes
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Configure le routage avec les routes définies
}).catch(err => console.error(err));
