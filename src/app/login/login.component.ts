import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');

  login() {
    this.authServ.login(this.user).subscribe({
      next: (data) => {
        this.authServ.isLogged = true;
        this.router.navigate(['/home']);
        console.log(data);
        localStorage.setItem('token', (<any>data).token);
      },
    });
  }

  constructor(public authServ: AuthService, public router: Router) {}

  ngOnInit(): void {}
}
