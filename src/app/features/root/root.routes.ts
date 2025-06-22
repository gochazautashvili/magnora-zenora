import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/welcome/welcome.component'),
  },
];

export default routes;
