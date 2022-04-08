import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SpeakerService } from './speaker.service';
import { Speaker } from './_models/speaker';

describe('TestService', () => {
  let service: SpeakerService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeakerService(httpClientSpy);
  });

  it('should return expected speakers (HttpClient called once)', (done: DoneFn) => {
    const expectedSpeakers: Speaker[] = [
      {
        _id: 1,
        userName: 'A',
        password: '123',
        email: 'yasser@iti.com',
        address: 'alex',
        role: 'speaker',
        image: 'img.png',
      },
      {
        _id: 1,
        userName: 'A',
        password: '123',
        email: 'yasser@iti.com',
        address: 'alex',
        role: 'speaker',
        image: 'img.png',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedSpeakers));

    service.getAllSpeakers().subscribe({
      next: (speakers) => {
        expect(speakers)
          .withContext('expected speakers')
          .toEqual(expectedSpeakers);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
