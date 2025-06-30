import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-overlay',
  imports: [CommonModule],
  templateUrl: './main-overlay.component.html',
  styleUrl: './main-overlay.component.scss'
})
export class MainOverlayComponent {
  someNum: number = 1;
}
