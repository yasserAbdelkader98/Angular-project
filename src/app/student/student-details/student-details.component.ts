import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  // @Input() dynamicId: number = 0;
  sub: Subscription | null = null;
  studentById: Student | null = null;

  constructor(public studentServ: StudentService, public AC: ActivatedRoute) {}
  //     this.studentServ.getSpeakerById(this.dynamicId).subscribe({
  //       next: (data) => (this.studentById = data),

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.studentServ.getSpeakerById(data['id']).subscribe({
          next: (data) => (this.studentById = data),
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
