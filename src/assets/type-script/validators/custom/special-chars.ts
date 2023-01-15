import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {hasSpecialChar} from "../../functions";
import {passwordSpecialChars} from "../constans/field-constrains";

export function containsSpecialCharsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValueValid = hasSpecialChar(value, passwordSpecialChars);
    return !isValueValid ? {specialChars: {containsSpecialChars: true}} : null;
  }
}
