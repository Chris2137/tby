import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string) : string{
    console.log(`LoginService.login called with username:${username}, password:${password}`);

    if(username === 'tbyuser' && password === 'pwd'){
      return 'sessionToken123';
    }
    else{
      return null;
    }

  }

  checkLogin(username: string) : string{

    if(username === 'tbyuser'){
      return 'tby';
    }
    else if(username === 'cbxuser'){
      return 'cbx';
    }
    else{
      return 'invalid';
    }
  }
}
