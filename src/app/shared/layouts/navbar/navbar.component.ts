import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input } from '@angular/core';

import { LanguageService } from '@core/i18n/language.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() type: 'magnora' | 'zenora' | 'root' = 'root';
  isMobile: boolean = window.innerWidth <= 768;

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
}
