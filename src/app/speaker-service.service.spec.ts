import { TestBed } from '@angular/core/testing';

import { SpeakerService } from './speaker.service';

describe('SpeakerServiceService', () => {
  let service: SpeakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
