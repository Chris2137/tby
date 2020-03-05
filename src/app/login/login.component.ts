import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("passwordInput") pwdField: ElementRef;

  username : string;
  password : string;


  requirePwd : boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  checkLogin(): void{

    var check = this.loginService.checkLogin(this.username);

    switch(check) {
       case 'cbx': {
          this.requirePwd = false;
          this.router.navigate(['/sso']);
          break;
       }
       case 'tby': {
          this.requirePwd = true;
          setTimeout(() => this.pwdField.nativeElement.focus(), 0);
          break;
       }
       default: {
          //user not found;
           this.requirePwd = false;
          break;
       }
    }

  }

  login(): void{
    console.log("Login button clicked", this.username, this.password);
    var token = this.loginService.login(this.username, this.password);
    if(token != null){
      console.log(`returned token: ${token} from loginService`);
      this.router.navigate(['/']);
    }

    console.log('Invalid credentials');

  }
}
