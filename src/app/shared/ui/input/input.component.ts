import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() status: 'normal' | 'success' | 'error' | 'magnora' = 'normal';
  @Input() variant: 'normal' | 'magnora' = 'normal';
  @Input() placeholder?: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
}
