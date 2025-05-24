import { ValidatorFn, AbstractControl} from '@angular/forms';

//This file sets up validation so that developers can tell controls if they are valid.
//Angular forms doesn't support that easily so bypasses that programming model.

export function ManualValidator(isValid: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (isValid) {
      return null;
    } else {
      return { IsInvalid: true };
    }
  };
}
