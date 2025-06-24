import { Component, inject, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';

  public translate = inject(TranslateService);

  public toggleLanguage() {
    const language = localStorage.getItem('language');

    if (language === 'en') {
      this.translate.use('ka');
      localStorage.setItem('language', 'ka');
    } else {
      this.translate.use('en');
      localStorage.setItem('language', 'en');
    }
  }
}
