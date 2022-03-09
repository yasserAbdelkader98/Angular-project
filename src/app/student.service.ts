import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl = 'http://localhost:8080/students/';

  getAllStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  addNewStudent(student: Student, file: File) {
    let myForm: FormData = new FormData();
    // myForm.append('id');
    myForm.append('username', student.userName);
    myForm.append('password', student.password);
    myForm.append('email', student.email);
    myForm.append('image', file);
    return this.http.post(this.baseUrl, myForm);
  }

  constructor(public http: HttpClient) {}
}
