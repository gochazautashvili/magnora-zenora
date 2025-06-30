import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/welcome/welcome.component'),
    data: { animation: 'welcome' },
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'about',
        loadComponent: () => import('./views/about/about.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./views/contact/contact.component'),
      },
    ],
  },
];

export default routes;
