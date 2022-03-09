import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  baseUrl: string = 'http://localhost:8080/speakers/';

  getAllSpeakers() {
    return this.http.get<Speaker[]>(this.baseUrl);
  }

  getSpeakerById(id: number) {
    return this.http.get<Speaker>(this.baseUrl + id);
  }

  addNewSpeaker(speaker: Speaker) {
    return this.http.post<Speaker>(this.baseUrl, speaker);
  }

  updateSpeaker(speaker: Speaker) {
    return this.http.put<Speaker>(this.baseUrl, speaker);
  }

  deleteSpeaker(id: number) {
    return this.http.delete<Speaker>(this.baseUrl + id);
  }

  constructor(public http: HttpClient) {}
}
