import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
  });

  it('should be created and have 3', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
    expect(service.getMenu().length).toEqual(3);
  }));
});
