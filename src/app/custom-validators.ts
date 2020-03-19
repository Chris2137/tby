import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function ValidateHasUpperCase(control: AbstractControl) {

  if (control.value.toLowerCase() === control.value) {
    return { hasUpperCase: true };
  }
  return null;
}

export function ValidateHasLowerCase(control: AbstractControl) {

  if (control.value.toUpperCase() === control.value) {
    return { hasLowerCase: true };
  }
  return null;
}

export const ValidatePasswordMatch : ValidatorFn = (control: FormGroup): ValidationErrors | null => {

  const pwd = control.get('password');
  const pwdChk = control.get('passwordConfirm');

  return pwd && pwdChk && pwd.value === pwdChk.value ? null : { passwordMismatch: true };
};

export class CustomValidators{
 }
