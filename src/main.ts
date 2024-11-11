import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent) // Inicializa o AppModule
  .catch((err) => console.error(err));
