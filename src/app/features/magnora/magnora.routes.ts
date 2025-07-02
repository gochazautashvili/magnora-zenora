import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'magnora',
    data: { animation: 'home' },
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./views/home/home.component'),
      },
      {
        path: 'collections',
        loadComponent: () =>
          import('./views/collections/collections.component'),
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'woman',
          },
          {
            path: 'man',
            loadComponent: () =>
              import(
                './views/collections/man-collections/man-collections.component'
              ),
          },
          {
            path: 'woman',
            loadComponent: () =>
              import(
                './views/collections/woman-collections/woman-collections.component'
              ),
          },
        ],
      },
    ],
  },
];

export default routes;
