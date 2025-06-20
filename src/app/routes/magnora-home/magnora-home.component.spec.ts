import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoraHomeComponent } from './magnora-home.component';

describe('MagnoraHomeComponent', () => {
  let component: MagnoraHomeComponent;
  let fixture: ComponentFixture<MagnoraHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoraHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
