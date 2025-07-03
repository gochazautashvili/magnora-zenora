import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '@shared/ui';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { getFormErrorMessage } from '@shared/utils/errors';
import { passwordComplexityValidator } from '@shared/utils/validators/form.validators';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../test-auth.service';

@Component({
  selector: 'app-sign-in-form',
  imports: [FormInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
})
export default class SignInFormComponent {
  public getErrorMessage = getFormErrorMessage;

  constructor(private authService: AuthService) {}

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
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // highlight validation errors
      return;
    }

    const { email, password } = this.form.getRawValue();

    this.authService.login(email, password).subscribe({
      next: (msg) => {
        console.log('✅', msg);
        // TODO: handle successful login (e.g., navigate, show message)
      },
      error: (err) => {
        console.error('❌', err.message);
        // TODO: show login error to user
      },
    });
  }
}

interface ILogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
