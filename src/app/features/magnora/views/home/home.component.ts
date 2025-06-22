import { Component } from '@angular/core';

import { HomeQaSectionComponent } from '@features/magnora/components/home-sections/home-qa-section/home-qa-section.component';
import { HomeServiceSectionComponent } from '@features/magnora/components/home-sections/home-service-section/home-service-section.component';
  
import {
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,

  
} from '@features/magnora/components/home-sections';
import { HomeFeatureSectionComponent } from "../../components/home-sections/home-feature-section/home-feature-section.component";

@Component({
  selector: 'app-home',
  imports: [
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
