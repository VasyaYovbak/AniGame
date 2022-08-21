import {Validators} from "@angular/forms";
import {fieldDecorator} from "../decorators";
import {password} from "../constans/field-names";
import {getMinFieldLengthError, requiredFieldError} from "../constans/errors";
import {passwordMinLength} from "../constans/field-constrains";

export function getPasswordValidators(minLength: number = passwordMinLength) {
  return [
    fieldDecorator(password, getMinFieldLengthError(password, minLength), Validators.minLength(minLength)),
    fieldDecorator(password, requiredFieldError, Validators.required)
  ]
}
