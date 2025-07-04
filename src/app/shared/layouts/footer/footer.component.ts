import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/ui';
import { InputComponent } from '@shared/ui/input/input.component';

@Component({
  selector: 'app-footer',
  imports: [InputComponent, ButtonComponent, CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() type: 'magnora' | 'zenora' | 'root' = 'root';

  public email = '';

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

  public submit() {
    alert(this.email);
  }
}
