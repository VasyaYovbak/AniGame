import {fieldDecorator} from "../decorators";
import {username} from "../constans/field-names";
import {
  getIsAlphaNumError,
  getMaxFieldLengthError,
  getMinFieldLengthError,
  requiredFieldError
} from "../constans/errors";
import {Validators} from "@angular/forms";
import {usernameMaxLength, usernameMinLength} from "../constans/field-constrains";
import {alphaNumericValidator} from "../custom/alpha-numeric";

export function getUsernameValidators(minLength: number = usernameMinLength, maxLength: number = usernameMaxLength) {
  return [
    fieldDecorator(username, getIsAlphaNumError(username), alphaNumericValidator()),
    fieldDecorator(username, getMaxFieldLengthError(username, maxLength), Validators.maxLength(maxLength)),
    fieldDecorator(username, getMinFieldLengthError(username, minLength), Validators.minLength(minLength)),
    fieldDecorator(username, requiredFieldError, Validators.required),
  ]
}
