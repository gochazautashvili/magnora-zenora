import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { LanguageService } from '@core/i18n/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  constructor(private languageService: LanguageService) {
    this.languageService.loadLanguage();
  }
}
