import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collections-section',
  imports: [ButtonComponent, CommonModule, TranslateModule],
  templateUrl: './collections-section.component.html',
  styleUrl: './collections-section.component.scss',
})
export class CollectionsSectionComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';
}
