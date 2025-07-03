import { Component } from '@angular/core';

import {
  ProductDetailsCtaSectionComponent,
  ProductDetailsSectionsComponent,
} from '@shared/components/mz-product-details-sections';

@Component({
  selector: 'app-product-details',
  imports: [ProductDetailsSectionsComponent, ProductDetailsCtaSectionComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export default class ProductDetailsComponent {}
