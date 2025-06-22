import { Component } from '@angular/core';

import {
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,
  HomeServiceSectionComponent,
} from '@features/magnora/components/home-sections';
import { HomeFeatureSectionComponent } from "../../components/home-sections/home-feature-section/home-feature-section.component";

@Component({
  selector: 'app-home',
  imports: [
    HomeHeroSectionComponent,
    HomeAboutSectionComponent,
    HomeServiceSectionComponent,
    HomeFeatureSectionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
