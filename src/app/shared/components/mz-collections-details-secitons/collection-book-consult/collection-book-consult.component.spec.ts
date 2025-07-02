import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBookConsultComponent } from './collection-book-consult.component';

describe('CollectionBookConsultComponent', () => {
  let component: CollectionBookConsultComponent;
  let fixture: ComponentFixture<CollectionBookConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionBookConsultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionBookConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
