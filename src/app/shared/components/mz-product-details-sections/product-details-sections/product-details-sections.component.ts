import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ISectionType } from '@shared/types/enums';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-product-details-sections',
  imports: [ButtonComponent],
  templateUrl: './product-details-sections.component.html',
  styleUrl: './product-details-sections.component.scss',
})
export class ProductDetailsSectionsComponent {
  @Input() type: ISectionType = 'magnora';

  public quantity: number = 1;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  public addToCart() {
    alert('კალათაში დაემატა: ' + this.quantity + ' პროდუქტი');
  }

  public incrementQuantity() {
    this.quantity++;
  }

  public decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  public like() {
    alert('თქვენ მოიწნოეთ ეს პროდუცტი');
  }
}
