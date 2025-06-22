import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MagnoraServiceComponent } from '../components/home-sections/magnora-service/magnora-service.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, MagnoraServiceComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent {}
