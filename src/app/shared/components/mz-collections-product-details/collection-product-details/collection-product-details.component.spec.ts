import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionProductDetailsComponent } from './collection-product-details.component';

describe('CollectionProductDetailsComponent', () => {
  let component: CollectionProductDetailsComponent;
  let fixture: ComponentFixture<CollectionProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
