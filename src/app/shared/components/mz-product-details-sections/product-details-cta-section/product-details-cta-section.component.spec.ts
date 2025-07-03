import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCtaSectionComponent } from './product-details-cta-section.component';

describe('ProductDetailsCtaSectionComponent', () => {
  let component: ProductDetailsCtaSectionComponent;
  let fixture: ComponentFixture<ProductDetailsCtaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsCtaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCtaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
