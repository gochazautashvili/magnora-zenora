import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [ FormsModule, CommonModule],
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
  @Input() label: string = 'Label';
  @Input() type: string = 'text';

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
