import { TestBed } from '@angular/core/testing';

import { PagesRoutesService } from './pages-routes.service';

describe('PagesRoutesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesRoutesService = TestBed.get(PagesRoutesService);
    expect(service).toBeTruthy();
  });
});
