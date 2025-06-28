import { Component } from '@angular/core';
import {
  ContactHeroSectionComponent,
  ContactFormSectionComponent,
  ContactNextStepsSectionComponent,
} from '../../../../shared/components/ora-contact-sections';

@Component({
  selector: 'app-contact-main',
  imports: [
    ContactHeroSectionComponent,
    ContactFormSectionComponent,
    ContactNextStepsSectionComponent,
  ],
  templateUrl: './contact-main.component.html',
  styleUrl: './contact-main.component.scss',
})
export class ContactMainComponent {}