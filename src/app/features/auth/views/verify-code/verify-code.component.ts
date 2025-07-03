import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-verify-code',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss',
})
export default class VerifyCodeComponent {
  @Input() length: number = 6;
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = 'Invalid OTP';
  @Input() autoFocus: boolean = true;

  @Output() otpChange = new EventEmitter<string>();
  @Output() otpComplete = new EventEmitter<string>();

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  digits: string[] = [];
  otpArray: number[] = [1, 2, 3, 4, 5, 6];

  ngOnInit() {
    this.digits = new Array(this.length).fill('');
    this.otpArray = new Array(this.length).fill(0).map((_, i) => i);
  }

  ngAfterViewInit() {
    if (this.autoFocus && this.otpInputs.length > 0) {
      setTimeout(() => this.otpInputs.first.nativeElement.focus(), 100);
    }
  }

  onInput(event: any, index: number) {
    const input = event.target;
    let value = input.value;

    value = value.replace(/\D/g, '');

    if (value.length > 1) {
      value = value.slice(-1);
    }

    input.value = value;

    this.digits[index] = value;

    if (value && index < this.length - 1) {
      setTimeout(() => {
        this.focusInput(index + 1);
      }, 10);
    }

    this.emitOtpChange();
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      if (!input.value && index > 0) {
        setTimeout(() => {
          this.focusInput(index - 1);
          const prevInput = this.otpInputs.toArray()[index - 1].nativeElement;
          prevInput.value = '';
          this.digits[index - 1] = '';
          this.emitOtpChange();
        }, 10);
      } else {
        this.digits[index] = '';
        this.emitOtpChange();
      }
      return;
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      this.focusInput(index - 1);
      return;
    }

    if (event.key === 'ArrowRight' && index < this.length - 1) {
      event.preventDefault();
      this.focusInput(index + 1);
      return;
    }

    if (
      !/\d/.test(event.key) &&
      ![
        'Backspace',
        'Delete',
        'ArrowLeft',
        'ArrowRight',
        'Tab',
        'Enter',
      ].includes(event.key)
    ) {
      event.preventDefault();
      return;
    }

    if (/\d/.test(event.key) && input.value) {
      input.value = '';
      this.digits[index] = '';
    }
  }

  onPaste(event: ClipboardEvent, index: number) {
    event.preventDefault();

    const pastedData = event.clipboardData?.getData('text') || '';
    const digits = pastedData
      .replace(/\D/g, '')
      .split('')
      .slice(0, this.length);

    this.clearAllInputs();

    digits.forEach((digit, i) => {
      if (i < this.length) {
        this.digits[i] = digit;
        const inputElement = this.otpInputs.toArray()[i].nativeElement;
        inputElement.value = digit;
      }
    });

    const nextEmptyIndex =
      digits.length < this.length ? digits.length : this.length - 1;
    setTimeout(() => {
      this.focusInput(nextEmptyIndex);
    }, 10);

    this.emitOtpChange();
  }

  onFocus(index: number) {
    setTimeout(() => {
      const input = this.otpInputs.toArray()[index].nativeElement;
      input.select();
    }, 10);
  }

  private focusInput(index: number) {
    if (index >= 0 && index < this.length && this.otpInputs) {
      const input = this.otpInputs.toArray()[index];
      if (input) {
        input.nativeElement.focus();
      }
    }
  }

  private clearAllInputs() {
    this.digits.fill('');
    if (this.otpInputs) {
      this.otpInputs.forEach((input) => {
        input.nativeElement.value = '';
      });
    }
  }

  private emitOtpChange() {
    const otp = this.digits.join('');
    this.otpChange.emit(otp);

    if (otp.length === this.length && !otp.includes('')) {
      this.otpComplete.emit(otp);
    }
  }

  clear() {
    this.clearAllInputs();
    if (this.otpInputs && this.otpInputs.length > 0) {
      setTimeout(() => {
        this.focusInput(0);
      }, 10);
    }
    this.emitOtpChange();
  }

  setValue(value: string) {
    const digits = value.replace(/\D/g, '').split('').slice(0, this.length);
    this.clearAllInputs();

    digits.forEach((digit, i) => {
      this.digits[i] = digit;
      if (this.otpInputs) {
        const inputElement = this.otpInputs.toArray()[i];
        if (inputElement) {
          inputElement.nativeElement.value = digit;
        }
      }
    });

    this.emitOtpChange();
  }

  getValue(): string {
    return this.digits.join('');
  }
}
