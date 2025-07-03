import { Component, Input } from '@angular/core';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-collection-details-slider',
  imports: [],
  templateUrl: './collection-details-slider.component.html',
  styleUrl: './collection-details-slider.component.scss',
})
export class CollectionDetailsSliderComponent {
  @Input() type: ISectionType = 'magnora';
}
