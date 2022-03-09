import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentListComponent, AddStudentComponent],
  imports: [CommonModule, FormsModule],
  exports: [StudentListComponent, AddStudentComponent],
})
export class StudentModule {}
