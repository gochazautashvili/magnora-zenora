import { Component } from '@angular/core';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';

interface Panel {
  expanded: boolean;
  title: string;
  content: string;
}

@Component({
  selector: 'app-home-qa-section',
  imports: [ExpansionPanelComponent, NgFor, ButtonComponent],
  templateUrl: './home-qa-section.component.html',
  styleUrl: './home-qa-section.component.scss'
})
export class HomeQaSectionComponent {
  panels: Panel[] = [
    {
      expanded: true,
      title: 'How much does a website cost?',
      content: 'Pricing depends on the project’s scope, features, and complexity. After a discovery call, we provide a custom quote tailored to your needs — no hidden fees, just transparent pricing.'
    },
    {
      expanded: false,
      title: 'How much does a website cost?',
      content: 'Pricing depends on the project’s scope, features, and complexity. After a discovery call, we provide a custom quote tailored to your needs — no hidden fees, just transparent pricing.'
    },
    {
      expanded: false,
      title: 'How much does a website cost?',
      content: 'Pricing depends on the project’s scope, features, and complexity. After a discovery call, we provide a custom quote tailored to your needs — no hidden fees, just transparent pricing.'
    },
    {
      expanded: false,
      title: 'How much does a website cost?',
      content: 'Pricing depends on the project’s scope, features, and complexity. After a discovery call, we provide a custom quote tailored to your needs — no hidden fees, just transparent pricing.'
    },
    
  ];
}
