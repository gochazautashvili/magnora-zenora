import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-home-about-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './home-about-section.component.html',
  styleUrl: './home-about-section.component.scss',
})
export class HomeAboutSectionComponent {
  @Input() type: ISectionType = 'magnora';
}
