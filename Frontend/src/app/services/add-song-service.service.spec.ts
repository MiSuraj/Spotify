import { TestBed } from '@angular/core/testing';

import { AddSongServiceService } from './add-song-service.service';

describe('AddSongServiceService', () => {
  let service: AddSongServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSongServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
