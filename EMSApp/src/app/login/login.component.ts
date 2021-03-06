import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../lib/css/font-awesome.min.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor(private _router: Router) { }

  goToMainPage() {
    this._router.navigate(['/main', {role: this.userName}]);
  }

  ngOnInit() {
  }

}
