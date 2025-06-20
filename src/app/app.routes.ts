import { Routes } from '@angular/router';
import { WelcomeComponent } from './routes/welcome/welcome.component';

import { MagnoraLayoutComponent } from './layouts/magnora-layout/magnora-layout.component';
import { ZenoraLayoutComponent } from './layouts/zenora-layout/zenora-layout.component';
import { MagnoraHomeComponent } from './routes/magnora-home/magnora-home.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'magnora',
    component: MagnoraLayoutComponent,
    children: [
      {
        path: '',
        component: MagnoraHomeComponent,
      },
    ],
  },
  { path: 'zenora', component: ZenoraLayoutComponent },
];
