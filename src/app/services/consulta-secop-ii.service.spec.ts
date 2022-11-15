import { TestBed } from '@angular/core/testing';

import { ConsultaSecopIIService } from './consulta-secop-ii.service';

describe('ConsultaSecopIIService', () => {
  let service: ConsultaSecopIIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaSecopIIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
