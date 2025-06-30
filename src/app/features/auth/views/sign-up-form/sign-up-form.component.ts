import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { getFormErrorMessage } from '@shared/utils/errors';
import { passwordComplexityValidator, passwordMatchValidator } from '@shared/utils/validators/form.validators';


import { FormControl, Validators, ValidatorFn, AbstractControl, FormGroup, ReactiveFormsModule,  ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, FormInputComponent, ButtonComponent],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})



export default class SignUpFormComponent {

  // checks if the phone number is valid: only numbers and exactly 9 digits
  private phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
  
    if (!/^\d*$/.test(value)) {
      return { onlyNumbers: true };
    }
  
    if (value.length !== 9) {
      return { exactLength: true };
    }
  
    return null;
  }
  

  public getErrorMessage = getFormErrorMessage;
  
  protected form = new FormGroup<ISignUpForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    number: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        this.phoneNumberValidator
      ],
    }),

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
  }, { validators: passwordMatchValidator['bind'](this) });
  
}

interface ISignUpForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  number: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
