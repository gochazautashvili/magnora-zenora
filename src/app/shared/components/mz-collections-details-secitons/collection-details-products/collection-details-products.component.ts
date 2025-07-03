import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection-details-products',
  imports: [],
  templateUrl: './collection-details-products.component.html',
  styleUrl: './collection-details-products.component.scss'
})
export class CollectionDetailsProductsComponent {
  products = [ 
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '60',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '60',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '60',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '80',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '90',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    {
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '90',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
    },
    

   ]

}
