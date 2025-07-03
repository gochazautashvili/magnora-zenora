import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsSliderComponent } from './collection-details-slider.component';

describe('CollectionDetailsSliderComponent', () => {
  let component: CollectionDetailsSliderComponent;
  let fixture: ComponentFixture<CollectionDetailsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionDetailsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
