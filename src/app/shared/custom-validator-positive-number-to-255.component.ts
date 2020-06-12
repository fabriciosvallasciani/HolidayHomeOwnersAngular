import { FormControl } from '@angular/forms';

/** positive integer values from 0 to 255 (both included) */
export function positiveNumberTo255Validator(control: FormControl): { [s: string]: boolean }  {
    const exp: RegExp = new RegExp("^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$") ;
    let allowed = exp.test(control.value);
    
    return !allowed ? {'forbiddenNumber': true} : null;
}