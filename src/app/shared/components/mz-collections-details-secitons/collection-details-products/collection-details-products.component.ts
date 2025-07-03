import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@shared/services/product-services/products.service';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-collection-details-products',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './collection-details-products.component.html',
  styleUrl: './collection-details-products.component.scss'
})
export class CollectionDetailsProductsComponent implements OnInit{
  router = inject(Router)
  productService = inject(ProductsService)

  ngOnInit(): void {
    this.products = this.productService.products;
  }
  products: any = []
  
  @Input() filter: boolean = true;

  onAppButtonClick(id :number) {
    this.router.navigate(['zenora/product-details', id]);
  }

  liked = false;

  toggleLike(product: any) {
    product.isLiked = !product.isLiked;
  }

  onMouseOver(product: any) {
    product.isLiked = !product.isLiked;
  }
  // products = [ 
  //   {
  //     id : 1,
  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '60',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false
  //   },
  //   {
  //     id : 2,
  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '60',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false

  //   },
  //   {
  //     id : 3,
  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '60',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false
  //   },
  //   {
  //     id : 4,
  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '80',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false
  //   },
  //   {
  //     id : 5,

  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '90',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false
  //   },
  //   {
  //     id : 6,

  //     img : 'assets/images/product-test.jpg',
  //     title: 'Obsidian Shield Bracelet',
  //     price : '90',
  //     content : 'A grounding talisman that absorbs negativity and stabilizes emotions.',
  //     isLiked : false,
  //     hovered: false
  //   },
    

  //  ]

}
