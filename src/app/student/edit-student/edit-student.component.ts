import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit, OnDestroy {
  file: any;
  sub: Subscription | null = null;
  // @Input() updatedId: number = 0;
  student: Student = new Student(0, '', '', '', '');
  constructor(
    public studentServ: StudentService,
    public AC: ActivatedRoute,
    public router: Router
  ) {}

  onFileChange(s: any) {
    this.file = s.target.files[0];
  }

  editStudent() {
    this.studentServ.editStudent(this.student, this.file).subscribe({
      next: (data) => {
        this.router.navigate(['/students']);
        console.log(data);
      },
    });
  }

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.studentServ
          .getSpeakerById(data['id'])
          .subscribe({ next: (data) => (this.student = data) });
      },
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
