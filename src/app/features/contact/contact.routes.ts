import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () =>
      import('./layout/layout.component')
      .then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/contact-main/contact-main.component')
          .then((m) => m.ContactMainComponent),
      },
    ],
  },
];

export default routes;
