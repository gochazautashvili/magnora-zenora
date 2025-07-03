import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchSectionComponent } from '../search-section/search-section.component';
import { OverlayService } from '@shared/services/overlay.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-main-overlay',
  imports: [CommonModule, SearchSectionComponent],
  templateUrl: './main-overlay.component.html',
  styleUrl: './main-overlay.component.scss',
  animations: [
    trigger('overlayFade', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [animate('300ms ease-out')]),
      transition('* => void', [animate('250ms ease-in')]),
    ]),
    trigger('sectionSlide', [
      state(
        'void',
        style({
          opacity: 1,
          transform: 'translateX(-100%) scale(0.8)',
        })
      ),
      state(
        'cart',
        style({
          opacity: 1,
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'account',
        style({
          opacity: 1,
          transform: 'translateX(0) scale(1)',
        })
      ),
      transition('void => cart', [
        style({
          opacity: 1,
          transform: 'translateX(-100%) scale(0.8)',
        }),
        animate(
          '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 1,
            transform: 'translateX(0) scale(1)',
          })
        ),
      ]),
      transition('void => account', [
        style({
          opacity: 1,
          transform: 'translateX(-100%) scale(0.8)',
        }),
        animate(
          '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 1,
            transform: 'translateX(0) scale(1)',
          })
        ),
      ]),
      transition('cart => void', [
        animate(
          '300ms cubic-bezier(0.55, 0, 0.55, 0.2)',
          style({
            opacity: 0,
            transform: 'translateX(-100%) scale(0.8)',
          })
        ),
      ]),
      transition('account => void', [
        animate(
          '300ms cubic-bezier(0.55, 0, 0.55, 0.2)',
          style({
            opacity: 0,
            transform: 'translateX(-100%) scale(0.8)',
          })
        ),
      ]),
    ]),
    trigger('menuSlide', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(100%) scale(0.8)',
        })
      ),
      state(
        'menu',
        style({
          opacity: 1,
          transform: 'translateX(0) scale(1)',
        })
      ),
      transition('void => menu', [
        style({
          opacity: 0,
          transform: 'translateX(100%) scale(0.8)',
        }),
        animate(
          '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 1,
            transform: 'translateX(0) scale(1)',
          })
        ),
      ]),
      transition('menu => void', [
        animate(
          '300ms cubic-bezier(0.55, 0, 0.55, 0.2)',
          style({
            opacity: 0,
            transform: 'translateX(100%) scale(0.8)',
          })
        ),
      ]),
    ]),
    trigger('searchFade', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.9)',
        })
      ),
      state(
        'search',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('void => search', [
        animate('350ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
      ]),
      transition('search => void', [
        animate('250ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
      ]),
    ]),
    trigger('headerSlide', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('void => *', [
        animate('300ms 100ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
      ]),
    ]),
    trigger('contentStagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(50, [
              animate(
                '300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('productSlide', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(-30px)',
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
      ]),
      transition('* => void', [
        animate('250ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
      ]),
    ]),
    trigger('buttonPress', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'pressed',
        style({
          transform: 'scale(0.95)',
        })
      ),
      transition('normal => pressed', [animate('100ms ease-in')]),
      transition('pressed => normal', [animate('150ms ease-out')]),
    ]),
    trigger('menuItemsStagger', [
      transition('* => *', [
        query(
          '.list-item',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(80, [
              animate(
                '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class MainOverlayComponent implements OnInit, OnDestroy {
  isOverlayOpen: boolean = false;
  isAuthenticated: boolean = true;
  openSectionName: string = '';
  mockCart: string[] = ["string"];
  buttonStates: { [key: string]: string } = {};

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

  // Button animation methods
  onButtonPress(buttonId: string) {
    this.buttonStates[buttonId] = 'pressed';
  }

  onButtonRelease(buttonId: string) {
    this.buttonStates[buttonId] = 'normal';
  }

  getButtonState(buttonId: string): string {
    return this.buttonStates[buttonId] || 'normal';
  }

  // Animation event handlers
  onSectionAnimationDone(event: any) {
    if (event.toState === 'void') {
      // Do nothing. Keep going
    }
  }

  onOverlayAnimationDone(event: any) {
    if (event.toState === 'void') {
      this.openSectionName = '';
    }
  }
}