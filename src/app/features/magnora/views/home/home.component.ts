import { Component } from '@angular/core';

import {
  HomeQaSectionComponent,
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,
  HomeServiceSectionComponent,
  HomeFeatureSectionComponent,
} from '@shared/components/mz-home-sections';

@Component({
  selector: 'app-home',
  imports: [
    HomeQaSectionComponent,
    HomeHeroSectionComponent,
    HomeAboutSectionComponent,
    HomeFeatureSectionComponent,
    HomeServiceSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
