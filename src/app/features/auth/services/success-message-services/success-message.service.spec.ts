import { TestBed } from '@angular/core/testing';

import { SuccessMessageService } from './success-message.service';

describe('SuccessMessageService', () => {
  let service: SuccessMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
