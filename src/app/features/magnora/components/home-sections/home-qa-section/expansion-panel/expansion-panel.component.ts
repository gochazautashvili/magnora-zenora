import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

interface Panel {
  expanded: boolean;
  title: string;
  content: string;
}

@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionModule, NgIf],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})

export class ExpansionPanelComponent {
  @Input() panelData : Panel | undefined;

  
}
