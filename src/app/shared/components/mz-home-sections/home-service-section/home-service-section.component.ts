import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-service-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './home-service-section.component.html',
  styleUrl: './home-service-section.component.scss',
})
export class HomeServiceSectionComponent {
  @Input() type: 'magnora' | 'zenora' = 'magnora';

  public magnora_services: ServiceCard[] = [
    {
      image: 'assets/images/magnora-service-image1.png',
      title: 'MAGNORA.HOME.SERVICES.PRODUCT_1.TITLE',
      description: 'MAGNORA.HOME.SERVICES.PRODUCT_1.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image2.png',
      title: 'MAGNORA.HOME.SERVICES.PRODUCT_2.TITLE',
      description: 'MAGNORA.HOME.SERVICES.PRODUCT_2.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image3.png',
      title: 'MAGNORA.HOME.SERVICES.PRODUCT_3.TITLE',
      description: 'MAGNORA.HOME.SERVICES.PRODUCT_3.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image4.png',
      title: 'MAGNORA.HOME.SERVICES.PRODUCT_4.TITLE',
      description: 'MAGNORA.HOME.SERVICES.PRODUCT_4.TEXT',
    },
  ];

  public zenora_services: ServiceCard[] = [
    {
      image: 'assets/images/magnora-service-image1.png',
      title: 'ZENORA.HOME.SERVICES.PRODUCT_1.TITLE',
      description: 'ZENORA.HOME.SERVICES.PRODUCT_1.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image2.png',
      title: 'ZENORA.HOME.SERVICES.PRODUCT_2.TITLE',
      description: 'ZENORA.HOME.SERVICES.PRODUCT_2.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image3.png',
      title: 'ZENORA.HOME.SERVICES.PRODUCT_3.TITLE',
      description: 'ZENORA.HOME.SERVICES.PRODUCT_3.TEXT',
    },
    {
      image: 'assets/images/magnora-service-image4.png',
      title: 'ZENORA.HOME.SERVICES.PRODUCT_4.TITLE',
      description: 'ZENORA.HOME.SERVICES.PRODUCT_4.TEXT',
    },
  ];
}
