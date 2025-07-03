import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-home-qa-section',
  imports: [
    MatExpansionModule,
    TranslateModule,
    ButtonComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home-qa-section.component.html',
  styleUrl: './home-qa-section.component.scss',
})
export class HomeQaSectionComponent {
  @Input() type: ISectionType = 'magnora';

  public magnora_qa = [
    {
      expanded: true,
      title: 'MAGNORA.HOME.QA.QUESTION_1.TITLE',
      content: 'MAGNORA.HOME.QA.QUESTION_1.TEXT',
    },
    {
      expanded: false,
      title: 'MAGNORA.HOME.QA.QUESTION_2.TITLE',
      content: 'MAGNORA.HOME.QA.QUESTION_2.TEXT',
    },
    {
      expanded: false,
      title: 'MAGNORA.HOME.QA.QUESTION_3.TITLE',
      content: 'MAGNORA.HOME.QA.QUESTION_3.TEXT',
    },
    {
      expanded: false,
      title: 'MAGNORA.HOME.QA.QUESTION_4.TITLE',
      content: 'MAGNORA.HOME.QA.QUESTION_4.TEXT',
    },
  ];

  public zenora_qa = [
    {
      expanded: true,
      title: 'ZENORA.HOME.QA.QUESTION_1.TITLE',
      content: 'ZENORA.HOME.QA.QUESTION_1.TEXT',
    },
    {
      expanded: false,
      title: 'ZENORA.HOME.QA.QUESTION_2.TITLE',
      content: 'ZENORA.HOME.QA.QUESTION_2.TEXT',
    },
    {
      expanded: false,
      title: 'ZENORA.HOME.QA.QUESTION_3.TITLE',
      content: 'ZENORA.HOME.QA.QUESTION_3.TEXT',
    },
    {
      expanded: false,
      title: 'ZENORA.HOME.QA.QUESTION_4.TITLE',
      content: 'ZENORA.HOME.QA.QUESTION_4.TEXT',
    },
  ];
}
