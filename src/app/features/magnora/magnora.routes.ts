import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: 'magnora',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./views/home/home.component'),
      },
    ],
  },
];

export default routes;
