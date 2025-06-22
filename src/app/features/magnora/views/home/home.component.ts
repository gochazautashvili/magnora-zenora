import { Component } from '@angular/core';

import { HomeHeroSectionComponent } from '../../components/home-sections/home-hero-section/home-hero-section.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
