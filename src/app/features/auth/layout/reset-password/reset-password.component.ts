import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  imports: [RouterOutlet, TranslateModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export default class ResetPasswordComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
