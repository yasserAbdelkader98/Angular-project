import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  @Input() dynamicId: number = 0;
  constructor(
    public studentServ: StudentService,
    public AC: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.AC.params.subscribe({
      next: (data) => {
        this.studentServ.deleteStudent(data['id']).subscribe({
          next: (data) => {
            this.router.navigate(['/students']);
            console.log(data);
          },
        });
      },
    });
  }
}
