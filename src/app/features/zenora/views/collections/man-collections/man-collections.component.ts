import { Component } from '@angular/core';

import { CollectionsSectionComponent } from '@shared/components/mz-collection.sections';

@Component({
  selector: 'app-man-collections',
  imports: [CollectionsSectionComponent],
  templateUrl: './man-collections.component.html',
  styleUrl: './man-collections.component.scss',
})
export default class ManCollectionsComponent {}
