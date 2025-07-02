import { RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import {
  CollectionsCtaSectionComponent,
  CollectionsHeroSectionComponent,
} from '@shared/components/mz-collection.sections';
import { HomeServiceSectionComponent } from '@shared/components/mz-home-sections';

@Component({
  selector: 'app-collections',
  imports: [
    RouterOutlet,
    RouterModule,
    HomeServiceSectionComponent,
    CollectionsCtaSectionComponent,
    CollectionsHeroSectionComponent,
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export default class CollectionsComponent {}
