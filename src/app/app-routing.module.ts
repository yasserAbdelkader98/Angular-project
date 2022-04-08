import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './appcontent/about/about.component';
import { ContactComponent } from './appcontent/contact/contact.component';
import { ErrorComponent } from './appcontent/error/error.component';
import { HomeComponent } from './appcontent/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddspeakerComponent } from './speaker/addspeaker/addspeaker.component';
import { DeleteSpeakerComponent } from './speaker/delete-speaker/delete-speaker.component';
import { EditSpeakerComponent } from './speaker/edit-speaker/edit-speaker.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Loginguard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'speakers',
    component: SpeakerListComponent,
    canActivate: [Loginguard],
    children: [
      { path: 'details/:id', component: SpeakerDetailsComponent },
      { path: 'delete/:id', component: DeleteSpeakerComponent },
    ],
  },
  {
    path: 'students',
    component: StudentListComponent,
    canActivate: [Loginguard],
    children: [
      { path: 'details/:id', component: StudentDetailsComponent },
      { path: 'details/:id', component: DeleteStudentComponent },
    ],
  },
  { path: 'speakers/add', component: AddspeakerComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'speakers/edit/:id', component: EditSpeakerComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
