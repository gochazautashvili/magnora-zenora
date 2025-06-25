import { TranslateService } from '@ngx-translate/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {}

  public setLang(langCode: string) {
    this.document.documentElement.lang = langCode;
  }

  public changeLang(lang: string) {
    localStorage.setItem('language', lang);
    this.translate.use(lang);
    this.setLang(lang);
  }

  public loadLanguage() {
    const language = localStorage.getItem('language');

    if (language) {
      this.translate.use(language);
      this.setLang(language);
    } else {
      this.translate.addLangs(['en', 'ka']);
      this.translate.setDefaultLang('en');

      const browserLang = this.translate.getBrowserLang();
      const lang =
        browserLang && browserLang.match(/en|ka|fr/) ? browserLang : 'en';

      this.translate.use(lang);
      this.setLang(lang);
    }
  }
}
