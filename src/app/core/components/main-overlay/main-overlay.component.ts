import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchSectionComponent } from "../search-section/search-section.component";

@Component({
  selector: 'app-main-overlay',
  imports: [CommonModule, SearchSectionComponent],
  templateUrl: './main-overlay.component.html',
  styleUrl: './main-overlay.component.scss'
})
export class MainOverlayComponent {
  someNum: number = 1;
}
