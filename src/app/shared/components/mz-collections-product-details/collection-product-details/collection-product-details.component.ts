import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import { BookConsultComponent } from "../../book-consult/book-consult.component";

@Component({
  selector: 'app-collection-product-details',
  imports: [ButtonComponent, BookConsultComponent],
  templateUrl: './collection-product-details.component.html',
  styleUrl: './collection-product-details.component.scss'
})
export default class CollectionProductDetailsComponent {

}
