import { Component } from '@angular/core';

import {
  AboutCtaSectionComponent,
  AboutHeroSectionComponent,
  AboutDescriptionSectionComponent,
} from '../../components/about-sections';

@Component({
  selector: 'app-about',
  imports: [
    AboutCtaSectionComponent,
    AboutHeroSectionComponent,
    AboutDescriptionSectionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {}
