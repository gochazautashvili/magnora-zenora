import { Component } from '@angular/core';

// from components folder
import {
  HomeQaSectionComponent,
  HomeHeroSectionComponent,
  HomeAboutSectionComponent,
  HomeServiceSectionComponent,
  HomeFeatureSectionComponent,
  
} from '@features/magnora/components/home-sections';

// from layout folder
import { FooterComponent } from '@features/magnora/layout/footer/footer.component';


interface FooterComponentProps {
  footerHeader: string;
  footerContent: string;
}

@Component({
  selector: 'app-home',
  imports: [
    HomeQaSectionComponent,
    HomeHeroSectionComponent,
    HomeAboutSectionComponent,
    HomeServiceSectionComponent,
    HomeFeatureSectionComponent,
    HomeQaSectionComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {

  // Magnora footer texts
  MagnorafooterTexts : FooterComponentProps = {
    footerHeader : 'Magnora', 
    footerContent : 'Experience timeless elegance, perfected in every detail.'
  };
  // Zenora footer texts
  ZenorafooterTexts : FooterComponentProps = {
    footerHeader : 'Zenora Footer Headers',
    footerContent : 'Zenora Footer Content'
  };
}
