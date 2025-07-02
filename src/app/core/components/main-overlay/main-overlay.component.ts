import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchSectionComponent } from "../search-section/search-section.component";
import { OverlayService } from '@shared/services/overlay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-overlay',
  imports: [CommonModule, SearchSectionComponent],
  templateUrl: './main-overlay.component.html',
  styleUrl: './main-overlay.component.scss',
})
export class MainOverlayComponent implements OnInit, OnDestroy {
  isOverlayOpen: boolean = false;
  isAuthenticated: boolean = true;

  openSectionName: string = '';
  mockCart: string[] = [];

  private subscriptions: Subscription[] = [];

  constructor(public overlayService: OverlayService) {}

  ngOnInit(): void {
    // Subscribe to overlay state changes
    this.subscriptions.push(
      this.overlayService.overlayState$.subscribe((isOpen) => {
        this.isOverlayOpen = isOpen;
      })
    );

    // Subscribe to messages
    this.subscriptions.push(
      this.overlayService.message$.subscribe((message) => {
        this.openSectionName = message;
      })
    );
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  closeOverlay() {
    this.overlayService.toggleOverlay(false);
  }
}
