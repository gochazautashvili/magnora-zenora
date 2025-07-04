import { Component } from '@angular/core';

import {
  CollectionBookConsultComponent,
  CollectionDetailsAboutComponent,
  CollectionDetailsSliderComponent,
  CollectionDetailsProductsComponent,
} from '@shared/components/mz-collections-details-sections';

@Component({
  selector: 'app-collections-detail',
  imports: [
    CollectionBookConsultComponent,
    CollectionDetailsAboutComponent,
    CollectionDetailsSliderComponent,
    CollectionDetailsProductsComponent,
  ],
  templateUrl: './collections-detail.component.html',
  styleUrl: './collections-detail.component.scss',
})
export default class CollectionsDetailComponent {}
