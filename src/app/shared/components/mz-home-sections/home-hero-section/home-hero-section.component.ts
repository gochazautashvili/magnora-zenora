import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@shared/ui';
import { RouterModule } from '@angular/router';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-home-hero-section',
  imports: [ButtonComponent, CommonModule, TranslateModule, RouterModule],
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.scss',
})
export class HomeHeroSectionComponent {
  @Input() type: ISectionType = 'magnora';
}
