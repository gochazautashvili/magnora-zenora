import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHeroSectionComponent } from './collections-hero-section.component';

describe('CollectionsHeroSectionComponent', () => {
  let component: CollectionsHeroSectionComponent;
  let fixture: ComponentFixture<CollectionsHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
