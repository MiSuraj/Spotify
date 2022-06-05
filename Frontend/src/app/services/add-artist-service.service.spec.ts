import { TestBed } from '@angular/core/testing';

import { AddArtistServiceService } from './add-artist-service.service';

describe('AddArtistServiceService', () => {
  let service: AddArtistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddArtistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
