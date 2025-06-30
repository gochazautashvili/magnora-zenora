import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOverlayComponent } from './main-overlay.component';

describe('MainOverlayComponent', () => {
  let component: MainOverlayComponent;
  let fixture: ComponentFixture<MainOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
