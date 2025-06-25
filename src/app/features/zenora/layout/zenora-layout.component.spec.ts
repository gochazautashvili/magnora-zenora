import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenoraLayoutComponent } from './zenora-layout.component';

describe('ZenoraLayoutComponent', () => {
  let component: ZenoraLayoutComponent;
  let fixture: ComponentFixture<ZenoraLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenoraLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenoraLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
