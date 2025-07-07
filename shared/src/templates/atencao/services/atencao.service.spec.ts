/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtencaoService } from './atencao.service';

describe('Service: Atencao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtencaoService]
    });
  });

  it('should ...', inject([AtencaoService], (service: AtencaoService) => {
    expect(service).toBeTruthy();
  }));
});
