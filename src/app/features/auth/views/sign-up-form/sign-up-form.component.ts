import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { getFormErrorMessage } from '@shared/utils/errors';


@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, FormInputComponent],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})

export default class SignUpFormComponent {
  public getErrorMessage = getFormErrorMessage;
  
  protected form = new FormGroup<ISignUpForm>({

    firstName: new FormControl<string>('', {
          nonNullable: true,
          validators: Validators.required,
      }),
    lastName: new FormControl<string>('', {
          nonNullable: true,
          validators: Validators.required,
      }),
    email: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.email],
      }),
    number: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.pattern(/^\+995\d{9}$/)],
      }),
    password: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
      }),
    confirmPassword: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
      }),
  })
}


interface ISignUpForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  number: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
