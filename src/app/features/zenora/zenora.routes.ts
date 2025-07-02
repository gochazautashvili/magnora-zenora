import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zenora',
    loadComponent: () => import('./layout/zenora-layout.component'),
    children: [
      { path: '', loadComponent: () => import('./views/home/home.component') },
      { path: 'collections', loadComponent: () => import('../../shared/components/mz-collections-details-secitons/collection-details-about/collection-details-about.component') },
    ],
  },
];

export default routes;
