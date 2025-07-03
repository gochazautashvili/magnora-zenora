import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { LanguageService } from '@core/i18n/language.service';
import { MainOverlayComponent } from './core/components/main-overlay/main-overlay.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  constructor(private languageService: LanguageService) {
    this.languageService.loadLanguage();
  }
}
