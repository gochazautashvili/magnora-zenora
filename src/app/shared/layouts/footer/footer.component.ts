import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonComponent } from '@shared/ui';
import { InputComponent } from '@shared/ui/input/input.component';

@Component({
  selector: 'app-footer',
  imports: [InputComponent, ButtonComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';

  // Magnora footer texts
  MTexts = {
    footerHeader: 'Magnora',
    footerContent: 'Experience timeless elegance, perfected in every detail.',
  };
  // Zenora footer texts
  ZTexts = {
    footerHeader: 'Zenora Footer Headers',
    footerContent: 'Zenora Footer Content',
  };
}
