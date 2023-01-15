import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {isAlphabetic} from "../../functions";

export function alphabeticValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValueValid = isAlphabetic(value);
    return !isValueValid ? {alphabetic: {containsAlphabetic: true}} : null;
  }
}
