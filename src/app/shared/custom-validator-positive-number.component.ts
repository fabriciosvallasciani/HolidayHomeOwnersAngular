import { FormControl } from '@angular/forms';

/** positive integer values from 0 to 255 (both included) */
export function positiveNumberValidator(control: FormControl): { [s: string]: boolean }  {
    const exp: RegExp = new RegExp("^[0-9]*$") ;
    let allowed = exp.test(control.value);

    return !allowed ? {'forbiddenNumber': true} : null;
}