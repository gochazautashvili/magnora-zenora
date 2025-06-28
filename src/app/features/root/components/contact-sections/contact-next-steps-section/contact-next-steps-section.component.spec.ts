import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNextStepsSectionComponent } from './contact-next-steps-section.component';

describe('ContactNextStepsSectionComponent', () => {
  let component: ContactNextStepsSectionComponent;
  let fixture: ComponentFixture<ContactNextStepsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactNextStepsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactNextStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
