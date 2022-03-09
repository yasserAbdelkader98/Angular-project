import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student(0, '', '', '', '');
  file: any;

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  saveNewStudent() {
    this.studentServ.addNewStudent(this.student, this.file).subscribe({
      next: (data) => console.log(data),
    });
  }
  constructor(public studentServ: StudentService) {}

  ngOnInit(): void {}
}
