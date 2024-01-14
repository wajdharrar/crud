import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import RouteConfig from './app/routes';
bootstrapApplication(AppComponent,{
  providers : [
    provideRouter(RouteConfig)
  ]
})
  .catch(err => console.error(err));
