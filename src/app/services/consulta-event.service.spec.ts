import { TestBed } from '@angular/core/testing';

import { ConsultaEventService } from './consulta-event.service';

describe('ConsultaEventService', () => {
  let service: ConsultaEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
