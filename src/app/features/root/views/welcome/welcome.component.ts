import {
  ElementRef,
  Component,
  ViewChild,
  inject,
  OnInit,
} from '@angular/core';

import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { navigate_animations } from '@features/root/animations/navigate-animation';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-welcome',
  imports: [ButtonComponent, CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  animations: navigate_animations,
})
export default class WelcomeComponent implements OnInit {
  @ViewChild('leftSection') leftSection!: ElementRef;
  @ViewChild('rightSection') rightSection!: ElementRef;

  private router = inject(Router);

  public leftSectionState = 'normal';
  public rightSectionState = 'normal';
  public oppositeState = 'visible';
  public overlayState = 'hidden';
  public isAnimating = false;

  public onMagnoraClick(event: Event) {
    event.preventDefault();
    if (this.isAnimating) return;

    this.animateAndNavigate('magnora');
  }

  public onZenoraClick(event: Event) {
    event.preventDefault();
    if (this.isAnimating) return;

    this.animateAndNavigate('zenora');
  }

  private animateAndNavigate(route: 'magnora' | 'zenora') {
    this.isAnimating = true;

    if (route === 'magnora') {
      this.leftSectionState = 'expanding-left';
      this.rightSectionState = 'normal';
    } else {
      this.rightSectionState = 'expanding-right';
      this.leftSectionState = 'normal';
    }

    setTimeout(() => {
      this.oppositeState = 'hidden';

      if (route === 'magnora') {
        this.leftSectionState = 'fullscreen-left';
      } else {
        this.rightSectionState = 'fullscreen-right';
      }

      setTimeout(() => {
        this.overlayState = 'visible';
        setTimeout(() => {
          this.router.navigate([route]);
        }, 400);
      }, 300);
    }, 200);
  }

  ngOnInit() {
    this.leftSectionState = 'normal';
    this.rightSectionState = 'normal';
    this.oppositeState = 'visible';
    this.overlayState = 'hidden';
    this.isAnimating = false;
  }
}
