import { Component, Input } from '@angular/core';
import SuccsessMessageComponent from '@features/auth/views/reset-password-form-passwords/succsess-message/succsess-message.component';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-success-seciton',
  imports: [ButtonComponent],
  templateUrl: './success-seciton.component.html',
  styleUrl: './success-seciton.component.scss'
})
export default class SuccessSecitonComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() buttonText: string = '';

}
