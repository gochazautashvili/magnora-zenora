import { Component } from '@angular/core';
import { FormInputComponent } from '../../../../../shared/ui/form-input/form-input.component';
import { ButtonComponent } from '../../../../../shared/ui/button/button.component';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form-section',
  imports: [FormInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact-form-section.component.html',
  styleUrl: './contact-form-section.component.scss',
})
export class ContactFormSectionComponent {
  protected contactForm = new FormGroup<IContactForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('^\\+[1-9]\\d{1,14}$'),
      ],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(50)],
    }),
  });

  onSubmit(): void {
    // TODO: Implement logic for contact form submission
  }
}

interface IContactForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  message: FormControl<string>;
}
