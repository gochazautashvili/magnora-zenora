import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatureSectionComponent } from './home-feature-section.component';

describe('HomeFeatureSectionComponent', () => {
  let component: HomeFeatureSectionComponent;
  let fixture: ComponentFixture<HomeFeatureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeatureSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeatureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
