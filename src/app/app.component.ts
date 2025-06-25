import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const language = localStorage.getItem('language');

    if (language) {
      this.translate.use(language);
    } else {
      this.translate.addLangs(['en', 'ka']);
      this.translate.setDefaultLang('en');

      const browserLang = this.translate.getBrowserLang();
      this.translate.use(
        browserLang && browserLang.match(/en|ka|fr/) ? browserLang : 'en'
      );
    }
  }
}
