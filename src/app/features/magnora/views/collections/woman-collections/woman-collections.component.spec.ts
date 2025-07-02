import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanCollectionsComponent } from './woman-collections.component';

describe('WomanCollectionsComponent', () => {
  let component: WomanCollectionsComponent;
  let fixture: ComponentFixture<WomanCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomanCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
