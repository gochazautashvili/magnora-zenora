import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ISectionType } from '@shared/types/enums';
import {
  ButtonComponent,
  FormSelectComponent,
  IFormSelectOptions,
} from '@shared/ui';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormInputComponent } from '@shared/ui/form-input/form-input.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collection-details-products',
  imports: [
    FormSelectComponent,
    FormInputComponent,
    ButtonComponent,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './collection-details-products.component.html',
  styleUrl: './collection-details-products.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CollectionDetailsProductsComponent {
  @Input() type: ISectionType = 'magnora';

  private router = inject(Router);

  public isShowFilter = false;

  public filter = {
    minPrice: null,
    maxPrice: null,
    category: null,
    sortBy: null,
  };

  public products = [
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

  public options: IFormSelectOptions[] = [
    {
      name: 'Test 1',
      value: 'Test 1',
    },
    {
      name: 'Test 1',
      value: 'Test 1',
    },
    {
      name: 'Test 1',
      value: 'Test 1',
    },
  ];

  public showFilter() {
    this.isShowFilter = true;
  }

  public closeFilter() {
    this.isShowFilter = false;
  }

  public onFilter() {
    console.log(this.filter);
  }
}
