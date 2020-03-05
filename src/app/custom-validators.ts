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

  console.log(`${pwd.value},${pwdChk.value} checking`);
  console.log(pwd && pwdChk && pwd.value === pwdChk.value);
  return pwd && pwdChk && pwd.value === pwdChk.value ? null : { passwordMismatch: true };
};
