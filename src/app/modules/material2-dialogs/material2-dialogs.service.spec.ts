import { TestBed, inject } from '@angular/core/testing';

import { Material2Dialogs } from './material2-dialogs.service';

describe('Material2DialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Material2Dialogs]
    });
  });

  it('should ...', inject([Material2Dialogs], (service: Material2Dialogs) => {
    expect(service).toBeTruthy();
  }));
});
