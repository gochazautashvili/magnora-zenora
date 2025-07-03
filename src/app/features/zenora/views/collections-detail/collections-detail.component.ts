import { Component } from '@angular/core';
import { CollectionBookConsultComponent } from '@shared/components/mz-collections-details-secitons/collection-book-consult/collection-book-consult.component';
import CollectionDetailsAboutComponent from '@shared/components/mz-collections-details-secitons/collection-details-about/collection-details-about.component';
import { CollectionDetailsProductsComponent } from '@shared/components/mz-collections-details-secitons/collection-details-products/collection-details-products.component';


@Component({
  selector: 'app-collections-detail',
  imports: [CollectionBookConsultComponent, CollectionBookConsultComponent, CollectionDetailsAboutComponent, CollectionDetailsProductsComponent],
  templateUrl: './collections-detail.component.html',
  styleUrl: './collections-detail.component.scss'
})
export default class CollectionsDetailComponent {

}
