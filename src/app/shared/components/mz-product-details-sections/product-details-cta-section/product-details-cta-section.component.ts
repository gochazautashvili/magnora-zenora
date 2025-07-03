import { Component, Input } from '@angular/core';
import { ISectionType } from '@shared/types/enums';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-product-details-cta-section',
  imports: [ButtonComponent],
  templateUrl: './product-details-cta-section.component.html',
  styleUrl: './product-details-cta-section.component.scss',
})
export class ProductDetailsCtaSectionComponent {
  @Input() type: ISectionType = 'magnora';
}
