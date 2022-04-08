import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  sub: Subscription | null = null;

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  saveNewStudent() {
    this.studentServ.addNewStudent(this.student, this.file).subscribe({
      next: (data) => {
        this.router.navigate(['/students']);
        console.log(data);
      },
    });
  }
  constructor(public studentServ: StudentService, public router: Router) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {}
}
