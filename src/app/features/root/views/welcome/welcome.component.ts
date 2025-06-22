import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export default class WelcomeComponent {}
