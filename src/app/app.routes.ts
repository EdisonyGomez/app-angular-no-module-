import { Routes } from '@angular/router';


// menu.routes.ts
export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./app.component').then((x) => x.AppComponent) },
    // Other routes...
  ];
  