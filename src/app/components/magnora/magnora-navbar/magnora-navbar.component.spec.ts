import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoraNavbarComponent } from './magnora-navbar.component';

describe('MagnoraNavbarComponent', () => {
  let component: MagnoraNavbarComponent;
  let fixture: ComponentFixture<MagnoraNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoraNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoraNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
