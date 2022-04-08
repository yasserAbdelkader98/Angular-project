import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnDestroy {
  allStudentList: Student[] = [];
  DeleteId: number = 0;
  DetailsId: number = 0;
  updateId: number = 0;
  sub: Subscription | null = null;

  constructor(public studentServ: StudentService) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    console.log('student destroyed');
  }

  ngOnInit(): void {
    this.sub = this.studentServ.getAllStudents().subscribe({
      next: (data) => (this.allStudentList = data),
    });
  }
}
