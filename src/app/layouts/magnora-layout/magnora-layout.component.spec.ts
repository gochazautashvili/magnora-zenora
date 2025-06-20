import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoraLayoutComponent } from './magnora-layout.component';

describe('MagnoraLayoutComponent', () => {
  let component: MagnoraLayoutComponent;
  let fixture: ComponentFixture<MagnoraLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoraLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoraLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
