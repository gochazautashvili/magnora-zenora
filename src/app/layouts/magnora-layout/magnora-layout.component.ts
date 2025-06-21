import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MagnoraNavbarComponent } from "../../components/magnora/magnora-navbar/magnora-navbar.component";

@Component({
  selector: 'app-magnora-layout',
  imports: [RouterOutlet, MagnoraNavbarComponent],
  templateUrl: './magnora-layout.component.html',
  styleUrl: './magnora-layout.component.scss'
})
export class MagnoraLayoutComponent {

}
