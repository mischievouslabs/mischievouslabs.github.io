import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'support',
    loadChildren: () => import('./support/support.routes').then(m => m.supportRoutes),
  },
];
