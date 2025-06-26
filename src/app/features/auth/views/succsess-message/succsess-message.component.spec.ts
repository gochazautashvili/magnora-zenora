import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccsessMessageComponent } from './succsess-message.component';

describe('SuccsessMessageComponent', () => {
  let component: SuccsessMessageComponent;
  let fixture: ComponentFixture<SuccsessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccsessMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccsessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
