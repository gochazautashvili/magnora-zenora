import { Component } from '@angular/core';
import { HomeHeroSectionComponent } from '../../components/home-sections/home-hero-section/home-hero-section.component';
import { HomeServiceSectionComponent } from '@features/magnora/components/home-sections/home-service-section/home-service-section.component';
import { HomeQaSectionComponent } from '@features/magnora/components/home-sections/home-qa-section/home-qa-section.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeroSectionComponent, HomeServiceSectionComponent, HomeQaSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
