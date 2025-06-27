import { Component } from '@angular/core';
import { AboutHeroSectionComponent } from "../../../../shared/components/ora-about-section/about-hero-section/about-hero-section.component";
import { AboutDescriptionSectionComponent } from "../../../../shared/components/ora-about-section/about-description-section/about-description-section.component";
import { AboutCtaSectionComponent } from "../../../../shared/components/ora-about-section/about-cta-section/about-cta-section.component";

@Component({
  selector: 'app-about-main',
  imports: [AboutHeroSectionComponent, AboutDescriptionSectionComponent, AboutCtaSectionComponent],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.scss'
})
export class AboutMainComponent {

}
