import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {isAlphaNumeric} from "../../functions";

export function alphaNumericValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValueValid = isAlphaNumeric(value);
    return !isValueValid ? {alphaNumeric: {containsAlphaNumeric: true}} : null;
  }
}
