import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/welcome/welcome.component'),
    data: { animation: 'welcome' },
  },
];

export default routes;
