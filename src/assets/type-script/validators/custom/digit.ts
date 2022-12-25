import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {hasSpecialChar} from "../../functions";
import {digits} from "../constans/field-constrains";

export function containsDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValueValid = hasSpecialChar(value, digits);
    return !isValueValid ? {digits: {containsDigits: true}} : null;
  }
}
