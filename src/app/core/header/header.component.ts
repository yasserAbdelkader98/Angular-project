import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  constructor(public authServ: AuthService, public router: Router) {}

  logout() {
    const myToken: any = localStorage.getItem('token');
    console.log(myToken);
    this.authServ.isLogged = false;

    this.router.navigate(['login']);
    localStorage.removeItem('token');
  }
  ngOnInit(): void {}
}
