import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@shared/ui';
import { RouterModule } from '@angular/router';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-collections-section',
  imports: [ButtonComponent, CommonModule, TranslateModule, RouterModule],
  templateUrl: './collections-section.component.html',
  styleUrl: './collections-section.component.scss',
})
export class CollectionsSectionComponent {
  @Input() type: ISectionType = 'magnora';
  @Input() genre: 'man' | 'women' = 'man';

  public collectionsBoxes = [
    {
      id: 1,
      position: 'left',
      imageType: 'img_2',
      imageConfig: {
        width: 416,
        height: 290,
        src: 'assets/images/magnora-feature (3).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Explore This Power',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_1.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_1.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_1.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_1.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_1.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_1.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_1.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_1.WOMEN.TEXT',
          },
        },
      },
    },
    {
      id: 2,
      position: 'right',
      imageType: 'img_1',
      imageConfig: {
        width: 300,
        height: 360,
        src: 'assets/images/magnora-feature (1).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Wear the Intention',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_2.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_2.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_2.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_2.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_2.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_2.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_2.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_2.WOMEN.TEXT',
          },
        },
      },
    },
    {
      id: 3,
      position: 'left',
      imageType: 'img_1',
      imageConfig: {
        width: 300,
        height: 360,
        src: 'assets/images/magnora-feature (1).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Choose This Path',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_3.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_3.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_3.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_3.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_3.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_3.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_3.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_3.WOMEN.TEXT',
          },
        },
      },
    },
    {
      id: 4,
      position: 'right',
      imageType: 'img_2',
      imageConfig: {
        width: 416,
        height: 290,
        src: 'assets/images/magnora-feature (3).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Select This Symbol',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_4.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_4.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_4.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_4.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_4.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_4.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_4.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_4.WOMEN.TEXT',
          },
        },
      },
    },
    {
      id: 5,
      position: 'left',
      imageType: 'img_2',
      imageConfig: {
        width: 416,
        height: 290,
        src: 'assets/images/magnora-feature (3).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Choose This Vibration',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_5.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_5.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_5.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_5.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_5.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_5.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_5.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_5.WOMEN.TEXT',
          },
        },
      },
    },
    {
      id: 6,
      position: 'right',
      imageType: 'img_1',
      imageConfig: {
        width: 300,
        height: 360,
        src: 'assets/images/magnora-feature (1).png',
        alt: 'Zenora Isis',
      },
      button: {
        text: 'Uncover the Meaning',
        variant: 'secondary',
      },
      content: {
        titleKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_6.MAN.TITLE',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_6.WOMEN.TITLE',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_6.MAN.TITLE',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_6.WOMEN.TITLE',
          },
        },
        textKey: {
          magnora: {
            man: 'MAGNORA.COLLECTIONS.SUB.BOX_6.MAN.TEXT',
            women: 'MAGNORA.COLLECTIONS.SUB.BOX_6.WOMEN.TEXT',
          },
          zenora: {
            man: 'ZENORA.COLLECTIONS.SUB.BOX_6.MAN.TEXT',
            women: 'ZENORA.COLLECTIONS.SUB.BOX_6.WOMEN.TEXT',
          },
        },
      },
    },
  ];
}
