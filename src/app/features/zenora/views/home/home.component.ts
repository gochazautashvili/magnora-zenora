import { Component } from '@angular/core';

import {
  HomeQaSectionComponent,
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,
  HomeFeatureSectionComponent,
  HomeServiceSectionComponent,
} from '@shared/components/mz-home-sections';

@Component({
  selector: 'app-home',
  imports: [
    HomeQaSectionComponent,
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
