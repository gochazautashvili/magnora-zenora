import { Component } from '@angular/core';

import {
  HomeQaSectionComponent,
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,

  
  HomeServiceSectionComponent,
  HomeFeatureSectionComponent,

  
} from '@features/magnora/components/home-sections';

@Component({
  selector: 'app-home',
  imports: [
    HomeQaSectionComponent,
    HomeHeroSectionComponent,
    HomeAboutSectionComponent,
    HomeServiceSectionComponent,
    HomeFeatureSectionComponent,
    HomeQaSectionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
