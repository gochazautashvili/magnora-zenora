import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '@shared/ui';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { getFormErrorMessage } from '@shared/utils/errors';
import { passwordComplexityValidator } from '@shared/utils/validators/form.validators';
import { FormControl, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  imports: [FormInputComponent, ButtonComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export default class SignInFormComponent {

  public getErrorMessage = getFormErrorMessage;

  protected form = new FormGroup<ILogInForm>({

    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8),
        passwordComplexityValidator,
      ],
    }),
  })
}


interface ILogInForm{
  email: FormControl<string>;
  password: FormControl<string>;
}