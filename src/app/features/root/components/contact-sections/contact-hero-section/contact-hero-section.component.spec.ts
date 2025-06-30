import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeroSectionComponent } from './contact-hero-section.component';

describe('ContactHeroSectionComponent', () => {
  let component: ContactHeroSectionComponent;
  let fixture: ComponentFixture<ContactHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
