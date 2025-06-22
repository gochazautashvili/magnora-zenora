import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQaSectionComponent } from './home-qa-section.component';

describe('HomeQaSectionComponent', () => {
  let component: HomeQaSectionComponent;
  let fixture: ComponentFixture<HomeQaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeQaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeQaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
