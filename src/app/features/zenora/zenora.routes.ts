import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zenora',
    loadComponent: () => import('./layout/zenora-layout.component'),
    children: [
      { path: '', loadComponent: () => import('./views/home/home.component') },
    ],
  },
];

export default routes;
