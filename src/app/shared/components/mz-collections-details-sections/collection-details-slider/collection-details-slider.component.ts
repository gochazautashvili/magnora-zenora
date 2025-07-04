import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISectionType } from '@shared/types/enums';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collection-details-slider',
  imports: [CommonModule, CommonModule, ButtonComponent],
  templateUrl: './collection-details-slider.component.html',
  styleUrl: './collection-details-slider.component.scss',
})
export class CollectionDetailsSliderComponent {
  @Input() type: ISectionType = 'magnora';

  public activeIndex = 0;

  public gallery = [
    {
      type: 'image',
      title: 'Lapis Wisdom Pendant',
      text_1:
        'Channel clarity and deep inner knowing through ancient protective stone energy.',
      url: 'assets/images/magnora-hero-banner.png',
    },
    {
      type: 'image',
      title: 'Lapis Wisdom Pendant',
      text_1:
        'Channel clarity and deep inner knowing through ancient protective stone energy.',
      url: 'assets/images/magnora-hero-banner.png',
    },
    {
      type: 'image',
      title: 'Lapis Wisdom Pendant',
      text_1:
        'Channel clarity and deep inner knowing through ancient protective stone energy.',
      url: 'assets/images/magnora-hero-banner.png',
    },
  ];

  ngOnInit(): void {
    if (this.type === 'zenora') {
      this.gallery = [
        {
          type: 'video',
          title: 'Lapis Wisdom Pendant',
          text_1:
            'Channel clarity and deep inner knowing through ancient protective stone energy.',
          url: 'assets/videos/magnora-hero-video.mp4',
        },
        {
          type: 'image',
          title: 'Lapis Wisdom Pendant',
          text_1:
            'Channel clarity and deep inner knowing through ancient protective stone energy.',
          url: 'assets/images/welcome-banner.png',
        },
      ];
    }
  }

  public setPageIndex(index: number) {
    this.activeIndex = index;
  }

  public nextPage() {
    if (this.gallery.length - 1 != this.activeIndex) {
      this.activeIndex++;
    } else {
      this.setPageIndex(0);
    }
  }

  public prevPage() {
    if (this.activeIndex != 0) {
      this.activeIndex--;
    } else {
      this.setPageIndex(this.gallery.length - 1);
    }
  }
}
