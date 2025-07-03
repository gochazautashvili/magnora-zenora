import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsAboutComponent } from './collection-details-about.component';

describe('CollectionDetailsAboutComponent', () => {
  let component: CollectionDetailsAboutComponent;
  let fixture: ComponentFixture<CollectionDetailsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionDetailsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDetailsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
