import { AbstractControl } from '@angular/forms';

export const getFormErrorMessage = (control: AbstractControl, e?: string) => {
  if (!control.touched) return undefined;

  if (e) return e;

  if (control.hasError('required')) return 'This field is required';

  if (control.hasError('minlength')) {
    return `Minimum length is ${control.errors?.['minlength']?.requiredLength}`;
  }

  if (control.hasError('maxlength')) {
    return `Maximum length is ${control.errors?.['maxlength']?.requiredLength}`;
  }

  if (control.hasError('pattern')) return 'Invalid format';
  if (control.hasError('email')) return 'Invalid email format';

  return undefined;
};
