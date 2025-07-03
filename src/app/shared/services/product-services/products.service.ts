import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = [ 
    {
      id : 1,
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Braceletssssss',
      price : '60',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
      isLiked : false,
      hovered: false
    },
    {
      id : 2,
      img : 'assets/images/product-test.jpg',
      title: 'Lapis Wisdom Pendant',
      price : '80',
      content : 'Channel clarity and deep inner knowing through ancient protective stone energy.',
      isLiked : false,
      hovered: false

    },
    {
      id : 3,
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '49',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
      isLiked : false,
      hovered: false
    },
    {
      id : 4,
      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '129',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
      isLiked : false,
      hovered: false
    },
    {
      id : 5,

      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '90',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
      isLiked : false,
      hovered: false
    },
    {
      id : 6,

      img : 'assets/images/product-test.jpg',
      title: 'Obsidian Shield Bracelet',
      price : '90',
      content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
      isLiked : false,
      hovered: false
    },
    

   ]

}
