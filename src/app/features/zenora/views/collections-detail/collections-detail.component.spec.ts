import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailComponent } from './collections-detail.component';

describe('CollectionsDetailComponent', () => {
  let component: CollectionsDetailComponent;
  let fixture: ComponentFixture<CollectionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
