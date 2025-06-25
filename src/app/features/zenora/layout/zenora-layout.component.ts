import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavbarComponent } from '@shared/layouts';

@Component({
  selector: 'app-zenora-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './zenora-layout.component.html',
  styleUrl: './zenora-layout.component.scss',
})
export default class ZenoraLayoutComponent {}
