import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import en from '@angular/common/locales/en';

import { provideTranslations } from './providers/i18n.providers';
import { routes } from './app.routes';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideTranslations(),
    provideNzI18n(en_US),
    provideHttpClient(),
    provideHttpClient(),
  ],
};
