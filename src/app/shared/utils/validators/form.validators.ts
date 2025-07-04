import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordComplexityValidator: ValidatorFn = (
  control: AbstractControl
) => {
  const value = control.value || '';
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const isValid = hasUpperCase && hasNumber;

  return isValid ? null : { passwordComplexity: true };
};

export const passwordMatchValidator: ValidationErrors = (
  group: AbstractControl
) => {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;

  return password === confirm ? null : { passwordsMismatch: true };
};
