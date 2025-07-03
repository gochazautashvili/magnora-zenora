import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export default class SignInComponent {}
