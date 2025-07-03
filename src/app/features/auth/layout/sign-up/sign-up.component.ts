import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export default class SignUpComponent {}
