import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export default class ResetPasswordComponent {}
