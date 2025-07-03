import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import { BookConsultComponent } from "../../book-consult/book-consult.component";
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@shared/services/product-services/products.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-collection-product-details',
  imports: [ButtonComponent, BookConsultComponent],
  templateUrl: './collection-product-details.component.html',
  styleUrl: './collection-product-details.component.scss'
})
export default class CollectionProductDetailsComponent implements OnInit {
  id!: string;
product: any;

route = inject(ActivatedRoute);
productService = inject(ProductsService);

ngOnInit() {
  window.scrollTo(0, 0);
  this.id = this.route.snapshot.paramMap.get('id')!;

  this.product = this.productService.products.find(
    product => product.id === parseInt(this.id, 10)
  );
}
constructor(private location: Location) {}

goBack() {
  this.location.back();
} 


}
