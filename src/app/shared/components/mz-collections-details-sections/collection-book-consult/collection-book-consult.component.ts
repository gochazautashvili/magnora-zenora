import { Component, Input } from '@angular/core';

import { ISectionType } from '@shared/types/enums';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collection-book-consult',
  imports: [ButtonComponent],
  templateUrl: './collection-book-consult.component.html',
  styleUrl: './collection-book-consult.component.scss',
})
export class CollectionBookConsultComponent {
  @Input() type: ISectionType = 'magnora';
}
