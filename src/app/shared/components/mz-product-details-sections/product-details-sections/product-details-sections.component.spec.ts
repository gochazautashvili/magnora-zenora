import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSectionsComponent } from './product-details-sections.component';

describe('ProductDetailsSectionsComponent', () => {
  let component: ProductDetailsSectionsComponent;
  let fixture: ComponentFixture<ProductDetailsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
