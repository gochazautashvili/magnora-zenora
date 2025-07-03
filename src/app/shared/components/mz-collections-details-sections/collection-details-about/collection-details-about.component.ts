import { Component, Input } from '@angular/core';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-collection-details-about',
  imports: [],
  templateUrl: './collection-details-about.component.html',
  styleUrl: './collection-details-about.component.scss',
})
export class CollectionDetailsAboutComponent {
  @Input() type: ISectionType = 'magnora';
}
