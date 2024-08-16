import { Routes } from '@angular/router';


// menu.routes.ts
export const routes: Routes = [
    { path: '', loadComponent: () => import('./app.component').then((x) => x.AppComponent) },
    // Other routes...
  ];
  