import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ISectionType } from '@shared/types/enums';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collection-details-products',
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './collection-details-products.component.html',
  styleUrl: './collection-details-products.component.scss',
})
export class CollectionDetailsProductsComponent {
  @Input() type: ISectionType = 'magnora';
  @Input() filter: boolean = true;

  products = [
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '60',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '60',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '60',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '80',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '90',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img: 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price: '90',
      content:
        'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
  ];
}
