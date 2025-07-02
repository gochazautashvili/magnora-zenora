import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ButtonComponent } from '@shared/ui';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { getFormErrorMessage } from '@shared/utils/errors';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, EmailValidator} from '@angular/forms';




@Component({
  selector: 'app-reset-password-form',
  imports: [ButtonComponent, FormInputComponent, ReactiveFormsModule],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss'
})
export default class ResetPasswordFormComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

  public getErrorMessage = getFormErrorMessage;


  protected form = new FormGroup<IResetPasswordForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  })
}
interface IResetPasswordForm {
    email : FormControl<string>;
}



