import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, NavbarComponent } from '@shared/layouts';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent {}
