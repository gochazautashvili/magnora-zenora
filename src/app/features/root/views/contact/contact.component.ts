import { Component } from '@angular/core';

import {
  ContactFormSectionComponent,
  ContactHeroSectionComponent,
  ContactNextStepsSectionComponent,
} from '../../components/contact-sections';

@Component({
  selector: 'app-contact',
  imports: [
    ContactFormSectionComponent,
    ContactHeroSectionComponent,
    ContactNextStepsSectionComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export default class ContactComponent {}
