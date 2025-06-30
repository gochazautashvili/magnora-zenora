import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections-hero-section',
  imports: [CommonModule, TranslateModule, CommonModule],
  templateUrl: './collections-hero-section.component.html',
  styleUrl: './collections-hero-section.component.scss',
})
export class CollectionsHeroSectionComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';
}
