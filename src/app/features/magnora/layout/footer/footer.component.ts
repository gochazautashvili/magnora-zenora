import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import { InputComponent } from '@shared/ui/input/input.component';

interface FooterComponentProps {
  footerHeader: string,
  footerContent: string,
}

@Component({
  selector: 'app-footer',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() footerText!: FooterComponentProps;

  isExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
