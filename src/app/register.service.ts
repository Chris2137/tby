import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }


  register(data): Observable<string> {
    return of('new record id');
  }

  resendConfirmEmail(recordId): Observable<string> {
    console.log(`triggered resend email for ${recordId} `);
    return of('Confirm email resent');
  }
}
