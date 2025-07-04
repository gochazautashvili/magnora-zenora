import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-input',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() status: 'normal' | 'success' | 'error' = 'normal';
  @Input() disabled: boolean = false;
  @Input() errorMessage?: string;
  @Input() placeholder: string = '';
  @Input() label?: string;
  @Input() type: string = 'text';
  // this note will display in "()"
  @Input() labelNote?: string;
  // this will display in the input as a hint
  @Input() formatProperties?: string[];
  @Input() forgotPasswordText?: boolean = false;

  isValidRule(rule: string): boolean {
    if (!this.value) return false;

    switch (rule) {
      case 'Minimum 8 characters':
        return this.value.length >= 8;
      case 'At least one number':
        return /\d/.test(this.value);
      case 'At least uppercase letter':
        return /[A-Z]/.test(this.value);
      default:
        return false;
    }
  }

  public showPassword: boolean = false;
  public value: string = '';

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  public onChange = (value: string) => {};

  public onTouched = () => {};

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
