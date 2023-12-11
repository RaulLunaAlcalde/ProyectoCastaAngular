import { TestBed } from '@angular/core/testing';

import { UsuariProductesService } from './usuari-productes.service';

describe('UsuariProductesService', () => {
  let service: UsuariProductesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariProductesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
