import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input } from '@angular/core';

import { LanguageService } from '@core/i18n/language.service';
import { OverlayService } from '@shared/services/overlay.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() type: 'magnora' | 'zenora' | 'root' = 'root';
  isMobile: boolean = window.innerWidth <= 768;

  currentActiveSection: string = '';

  constructor(public overlayService: OverlayService) { }

  public translate = inject(LanguageService);

  public toggleLanguage() {
    const language = localStorage.getItem('language');

    if (language === 'en') {
      this.translate.changeLang('ka');
    } else {
      this.translate.changeLang('en');
    }
  }

  get navbarLogo(): string {
    if (this.isMobile) return 'assets/icons/ora-logo.svg';
    switch (this.type) {
      case 'root':
        return 'assets/icons/ora-navbar-icon.png';
      case 'magnora':
        return 'assets/icons/magnora-navbar-logo.png';
      case 'zenora':
        return 'assets/icons/zenora-navbar-logo.png';
      default:
        return '';
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  openOverlay(message: string) {
    const isCurrentlyOpen = this.overlayService.isOverlayOpen();
    
    if (isCurrentlyOpen && this.currentActiveSection === message) {
      // Same button clicked twice - close the overlay
      this.overlayService.toggleOverlay(false);
      this.currentActiveSection = '';
    } else {
      // Different button clicked or overlay is closed - open/keep open and change section
      if (!isCurrentlyOpen) {
        this.overlayService.toggleOverlay(true);
      }
      
      this.overlayService.sendMessage(message);
      this.currentActiveSection = message;
    }
  }
}
