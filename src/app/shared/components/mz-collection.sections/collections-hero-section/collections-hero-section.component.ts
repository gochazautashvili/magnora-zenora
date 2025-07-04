import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ISectionType } from '@shared/types/enums';

@Component({
  selector: 'app-collections-hero-section',
  imports: [CommonModule, TranslateModule, CommonModule],
  templateUrl: './collections-hero-section.component.html',
  styleUrl: './collections-hero-section.component.scss',
})
export class CollectionsHeroSectionComponent implements OnInit {
  @Input() type: ISectionType = 'magnora';

  public activeIndex = 0;

  public gallery = [
    {
      title: '',
      type: 'image',
      text_1: 'MAGNORA.COLLECTIONS.HERO.TEXT_1',
      text_2: 'MAGNORA.COLLECTIONS.HERO.TEXT_2',
      url: 'assets/images/magnora-hero-banner.png',
    },
    {
      title: '',
      type: 'image',
      text_1: 'MAGNORA.COLLECTIONS.HERO.TEXT_1',
      text_2: 'MAGNORA.COLLECTIONS.HERO.TEXT_2',
      url: 'assets/images/magnora-hero-banner.png',
    },
    {
      title: '',
      type: 'image',
      text_1: 'MAGNORA.COLLECTIONS.HERO.TEXT_1',
      text_2: 'MAGNORA.COLLECTIONS.HERO.TEXT_2',
      url: 'assets/images/magnora-hero-banner.png',
    },
  ];

  ngOnInit(): void {
    if (this.type === 'zenora') {
      this.gallery = [
        {
          title: '',
          type: 'video',
          text_1: 'ZENORA.COLLECTIONS.HERO.TEXT_1',
          text_2: 'ZENORA.COLLECTIONS.HERO.TEXT_2',
          url: 'assets/videos/magnora-hero-video.mp4',
        },
        {
          title: '',
          type: 'image',
          text_1: 'ZENORA.COLLECTIONS.HERO.TEXT_1',
          text_2: 'ZENORA.COLLECTIONS.HERO.TEXT_2',
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
