import {
  transition,
  animate,
  trigger,
  state,
  style,
} from '@angular/animations';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-welcome',
  imports: [ButtonComponent, CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  animations: [
    trigger('slideAnimation', [
      // Normal state
      state(
        'normal',
        style({
          transform: 'translateX(0)',
          flex: '0.5',
          opacity: 1,
        })
      ),

      // Expanded states
      state(
        'expandedLeft',
        style({
          transform: 'translateX(0)',
          flex: '1',
          opacity: 1,
        })
      ),

      state(
        'expandedRight',
        style({
          transform: 'translateX(0)',
          flex: '1',
          opacity: 1,
        })
      ),

      // Collapsed states - slide out smoothly
      state(
        'collapsedLeft',
        style({
          transform: 'translateX(-100%)',
          flex: '0',
          opacity: 0,
        })
      ),

      state(
        'collapsedRight',
        style({
          transform: 'translateX(100%)',
          flex: '0',
          opacity: 0,
        })
      ),

      // Smooth transitions with better easing
      transition('normal => expandedLeft', [
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ]),

      transition('normal => expandedRight', [
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ]),

      transition('normal => collapsedLeft', [
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ]),

      transition('normal => collapsedRight', [
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ]),

      transition('* => normal', [
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ]),
    ]),
  ],
})
export default class WelcomeComponent {
  public expandedSide: 'left' | 'right' | null = null;

  public expandSide(side: 'left' | 'right') {
    if (this.expandedSide !== side) {
      this.expandedSide = side;
    }
  }

  public reset(event: Event) {
    event.stopPropagation();
    this.expandedSide = null;
  }

  public getAnimationState(side: 'left' | 'right'): string {
    if (this.expandedSide === null) return '';

    if (this.expandedSide === side) {
      return `expanded${side.charAt(0).toUpperCase() + side.slice(1)}`;
    } else {
      return `collapsed${side.charAt(0).toUpperCase() + side.slice(1)}`;
    }
  }
}
