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

  addSpeaker(speaker: Speaker, file: File) {
    let myForm: FormData = new FormData();
    myForm.append('userName', speaker.userName);
    myForm.append('password', speaker.password);
    myForm.append('email', speaker.email);
    myForm.append('address', speaker.address);
    myForm.append('role', speaker.role);
    myForm.append('image', file);
    return this.http.post(this.baseUrl, myForm);
  }

  editSpeaker(speaker: Speaker, file: File) {
    let myForm: FormData = new FormData();
    myForm.append('userName', speaker.userName);
    myForm.append('password', speaker.password);
    myForm.append('email', speaker.email);
    myForm.append('address', speaker.address);
    myForm.append('role', speaker.role);
    myForm.append('image', file);
    return this.http.put(this.baseUrl, myForm);
  }

  constructor(public http: HttpClient) {}
}
