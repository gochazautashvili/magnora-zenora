import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zenora',
    loadComponent: () => import('./layout/zenora-layout.component'),
    children: [
      { path: '', loadComponent: () => import('./views/home/home.component') },
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
