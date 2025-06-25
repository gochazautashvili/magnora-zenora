import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./views/sign-up/sign-up.component'),
      },
    ],
  },
];

export default routes;
