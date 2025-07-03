import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-about-cta-section',
  imports: [TranslateModule, ButtonComponent, RouterModule],
  templateUrl: './about-cta-section.component.html',
  styleUrl: './about-cta-section.component.scss',
})
export class AboutCtaSectionComponent {}
