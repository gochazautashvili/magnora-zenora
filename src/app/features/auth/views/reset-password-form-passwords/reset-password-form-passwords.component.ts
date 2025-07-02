import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/ui';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { passwordComplexityValidator, passwordMatchValidator } from '@shared/utils/validators/form.validators';
import { getFormErrorMessage } from '@shared/utils/errors';



@Component({
  selector: 'app-reset-password-form-passwords',
  imports: [FormInputComponent,ButtonComponent, ReactiveFormsModule],
  templateUrl: './reset-password-form-passwords.component.html',
  styleUrl: './reset-password-form-passwords.component.scss'
})
export default class ResetPasswordFormPasswordsComponent {

  public getErrorMessage = getFormErrorMessage;


  protected form = new FormGroup<IResetPasswordForm>({
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8),
        passwordComplexityValidator,
      ],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  }, { validators: passwordMatchValidator['bind'](this) })
}

interface IResetPasswordForm  {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
