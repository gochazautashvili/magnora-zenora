import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutSectionComponent } from './home-about-section.component';

describe('HomeAboutSectionComponent', () => {
  let component: HomeAboutSectionComponent;
  let fixture: ComponentFixture<HomeAboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
