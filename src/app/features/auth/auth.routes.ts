import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./layout/sign-up/sign-up.component'),
        children: [
          {
            path: '',
            loadComponent: () => import('./views/sign-up-form/sign-up-form.component'),
          }
        ]
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./layout/sign-in/sign-in.component'),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./layout/reset-password/reset-password.component'),
      },
    ],
    
  },
];

export default routes;
