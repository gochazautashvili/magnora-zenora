import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/root/root.routes') },
  { path: '', loadChildren: () => import('./features/auth/auth.routes') },
  { path: '', loadChildren: () => import('./features/magnora/magnora.routes') },
  { path: '', loadChildren: () => import('./features/zenora/zenora.routes') },
  { path: '', loadChildren: () => import('./features/contact/contact.routes') }
];
