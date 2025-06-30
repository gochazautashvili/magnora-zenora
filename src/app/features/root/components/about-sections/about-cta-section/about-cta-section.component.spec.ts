import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCtaSectionComponent } from './about-cta-section.component';

describe('AboutCtaSectionComponent', () => {
  let component: AboutCtaSectionComponent;
  let fixture: ComponentFixture<AboutCtaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCtaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCtaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
