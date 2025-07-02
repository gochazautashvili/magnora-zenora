import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFormPasswordsComponent } from './reset-password-form-passwords.component';

describe('ResetPasswordFormPasswordsComponent', () => {
  let component: ResetPasswordFormPasswordsComponent;
  let fixture: ComponentFixture<ResetPasswordFormPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordFormPasswordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordFormPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
