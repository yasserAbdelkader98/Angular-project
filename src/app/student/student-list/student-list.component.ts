import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  allStudentList: Student[] = [];

  constructor(public studentServ: StudentService) {}

  ngOnInit(): void {
    this.studentServ.getAllStudents().subscribe({
      next: (data) => (this.allStudentList = data),
    });
  }
}
