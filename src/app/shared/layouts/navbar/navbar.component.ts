import { Component, inject, Input } from '@angular/core';

import { LanguageService } from '@core/i18n/language.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';

  public translate = inject(LanguageService);

  public toggleLanguage() {
    const language = localStorage.getItem('language');

    if (language === 'en') {
      this.translate.changeLang('ka');
    } else {
      this.translate.changeLang('en');
    }
  }
}
