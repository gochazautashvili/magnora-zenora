import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCollectionsComponent } from './man-collections.component';

describe('ManCollectionsComponent', () => {
  let component: ManCollectionsComponent;
  let fixture: ComponentFixture<ManCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
