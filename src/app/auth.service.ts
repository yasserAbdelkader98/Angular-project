import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { speakerRegister } from './_models/register';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:8080/';

  isLogged: boolean = false;
  login(user: User) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  register(speaker: speakerRegister, file: File) {
    let myForm: FormData = new FormData();
    myForm.append('userName', speaker.userName);
    myForm.append('password', speaker.password);
    myForm.append('email', speaker.email);
    myForm.append('address', speaker.address);
    myForm.append('check', speaker.check);
    myForm.append('image', file);
    return this.http.post(this.baseUrl + 'register', myForm);
  }

  constructor(public http: HttpClient) {}
}
