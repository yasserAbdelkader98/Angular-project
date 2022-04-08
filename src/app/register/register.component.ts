import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { speakerRegister } from '../_models/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  speakerUser: speakerRegister = new speakerRegister(
    'speaker',
    '',
    '',
    '',
    '',
    ''
  );
  file: any;
  register() {
    console.log(this.speakerUser);
    this.authServ.register(this.speakerUser, this.file).subscribe({
      next: (data) => console.log(data),
    });
  }
  onFileChange(s: any) {
    this.file = s.target.files[0];
  }
  constructor(public authServ: AuthService) {}

  ngOnInit(): void {}
}
