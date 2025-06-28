import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDescriptionSectionComponent } from './about-description-section.component';

describe('AboutDescriptionSectionComponent', () => {
  let component: AboutDescriptionSectionComponent;
  let fixture: ComponentFixture<AboutDescriptionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDescriptionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
