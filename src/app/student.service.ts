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
    myForm.append('userName', student.userName);
    myForm.append('password', student.password);
    myForm.append('email', student.email);
    myForm.append('image', file);
    return this.http.post(this.baseUrl, myForm);
  }

  editStudent(student: Student, file: File) {
    let myForm: FormData = new FormData();
    myForm.append('userName', student.userName);
    myForm.append('password', student.password);
    myForm.append('email', student.email);
    myForm.append('image', file);
    return this.http.put(this.baseUrl, myForm);
  }

  getSpeakerById(id: Number) {
    return this.http.get<Student>(this.baseUrl + id);
  }

  deleteStudent(id: Number) {
    return this.http.delete<Student>(this.baseUrl + id);
  }

  constructor(public http: HttpClient) {}
}
