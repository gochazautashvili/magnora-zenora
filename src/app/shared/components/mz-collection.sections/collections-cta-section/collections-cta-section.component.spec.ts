import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCtaSectionComponent } from './collections-cta-section.component';

describe('CollectionsCtaSectionComponent', () => {
  let component: CollectionsCtaSectionComponent;
  let fixture: ComponentFixture<CollectionsCtaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsCtaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsCtaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
