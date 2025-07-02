import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsProductsComponent } from './collection-details-products.component';

describe('CollectionDetailsProductsComponent', () => {
  let component: CollectionDetailsProductsComponent;
  let fixture: ComponentFixture<CollectionDetailsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionDetailsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDetailsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
