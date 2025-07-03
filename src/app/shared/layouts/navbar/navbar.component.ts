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
  isMenuOpen: boolean = false; 

  constructor(public overlayService: OverlayService) {}

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
    const isSameSection = this.currentActiveSection === message;

    if (isSameSection && isCurrentlyOpen) {
      // Close overlay
      this.overlayService.toggleOverlay(false);
      this.currentActiveSection = '';

      if (message === 'menu') this.isMenuOpen = false;
    } else {
      // Open overlay with new section
      this.overlayService.sendMessage(message);
      this.overlayService.toggleOverlay(true);
      this.currentActiveSection = message;

      // Toggle menu icon only if menu was opened
      this.isMenuOpen = message === 'menu';
    }
  }
}
