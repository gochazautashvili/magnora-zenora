import { Component } from '@angular/core';

import {
  CollectionBookConsultComponent,
  CollectionDetailsAboutComponent,
  CollectionDetailsProductsComponent,
} from '@shared/components/mz-collections-details-sections';

@Component({
  selector: 'app-collections-detail',
  imports: [
    CollectionBookConsultComponent,
    CollectionDetailsAboutComponent,
    CollectionDetailsProductsComponent,
  ],
  templateUrl: './collections-detail.component.html',
  styleUrl: './collections-detail.component.scss',
})
export default class CollectionsDetailComponent {}
