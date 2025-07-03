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
            loadComponent: () =>
              import('./views/sign-up-form/sign-up-form.component'),
          },
          {
            path: 'verify-code',
            loadComponent: () =>
              import('./views/verify-code/verify-code.component'),
          },
        ],
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./layout/sign-in/sign-in.component'),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./views/sign-in-form/sign-in-form.component'),
          },
          {
            path: 'verify-code',
            loadComponent: () =>
              import('./views/verify-code/verify-code.component'),
          },
        ],
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./layout/reset-password/reset-password.component'),
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './views/reset-password-form/reset-password-form.component'
              ),
          },
          {
            path: 'verify-code',
            loadComponent: () =>
              import('./views/verify-code/verify-code.component'),
          },
          {
            path: 'passwords',
            loadComponent: () =>
              import(
                './views/reset-password-form-passwords/reset-password-form-passwords.component'
              ),
          },
          {
            path: 'success',
            loadComponent: () =>
              import('./views/succsess-message/succsess-message.component'),
          },
        ],
      },
    ],
  },
];

export default routes;
