import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  public isSpecialRoute = false;
  public type: string = "";

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {
    this.languageService.loadLanguage();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Change "special" to your keyword
        this.isSpecialRoute = event.urlAfterRedirects.includes('magnora');
        this.type = this.isSpecialRoute === true ? 'magnora' : '';
      });
  }
}
