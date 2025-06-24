import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-home-feature-section',
  imports: [ButtonComponent, TranslateModule, CommonModule],
  templateUrl: './home-feature-section.component.html',
  styleUrl: './home-feature-section.component.scss',
})
export class HomeFeatureSectionComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';
}
