import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { OverlayService } from '@shared/services/overlay.service';

@Component({
  selector: 'app-search-section',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(8px)' })
        ),
      ]),
    ]),
  ],
})
export class SearchSectionComponent implements OnInit {
  @Input() isMobile!: boolean;

  topValue!: number;
  searchQuery: string = '';

  constructor(public overlayService: OverlayService) {}

  ngOnInit(): void {
    this.topValue = this.isMobile ? 24 : 172;
  }

  closeOverlaySearchBar(): void {
    this.overlayService.toggleOverlay(false);
  }
}
