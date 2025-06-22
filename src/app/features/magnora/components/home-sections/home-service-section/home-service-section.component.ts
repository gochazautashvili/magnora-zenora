import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface ServiceCard {
  image: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-home-service-section',
  imports: [NgFor],
  templateUrl: './home-service-section.component.html',
  styleUrl: './home-service-section.component.scss'
})
export class HomeServiceSectionComponent {

    services: ServiceCard[] = [
      {
        image : 'assets/images/magnora-service-image1.png',
        title : 'Energy-Infused Jewelry Collections',
        description : 'High-end pieces made with natural crystals and symbols — each designed to attract love, clarity, or protection.'
      },
      {
        image : 'assets/images/magnora-service-image2.png',
        title : 'Custom Order & Intent-Based Design',
        description : 'We craft custom pieces aligned with your energy and personal story.'
      },
      {
        image : 'assets/images/magnora-service-image3.png',
        title : 'Gifting & Energetic Packaging',
        description : 'Each order is beautifully packaged and energetically cleansed — a gift with meaning.'
      },
      {
        image : 'assets/images/magnora-service-image4.png',
        title : 'Symbol & Stone Consultation',
        description : 'Not sure what to choose? We help you find the energy that fits your journey.'
      },
      
    ]
}
