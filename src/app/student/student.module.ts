import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    DeleteStudentComponent,
    EditStudentComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [StudentListComponent, AddStudentComponent],
})
export class StudentModule {}
