import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '@shared/layouts/magnora-zenora-navbar/navbar.component';

@Component({
  selector: 'app-zenora-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './zenora-layout.component.html',
  styleUrl: './zenora-layout.component.scss',
})
export default class ZenoraLayoutComponent {}
