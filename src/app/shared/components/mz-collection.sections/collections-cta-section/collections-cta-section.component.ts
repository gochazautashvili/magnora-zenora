import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collections-cta-section',
  imports: [ButtonComponent, CommonModule, TranslateModule],
  templateUrl: './collections-cta-section.component.html',
  styleUrl: './collections-cta-section.component.scss',
})
export class CollectionsCtaSectionComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';
}
