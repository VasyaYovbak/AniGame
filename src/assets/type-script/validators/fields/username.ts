import {fieldDecorator} from "../decorators";
import {email, password, username} from "../constans/field-names";
import {getMaxFieldLengthError, getMinFieldLengthError, requiredFieldError, wrongEmailError} from "../constans/errors";
import {Validators} from "@angular/forms";
import {passwordMinLength, usernameMaxLength, usernameMinLength} from "../constans/field-constrains";

export function getUsernameValidators(minLength: number = usernameMinLength, maxLength: number = usernameMaxLength) {
  return [
    fieldDecorator(username, getMinFieldLengthError(username, minLength), Validators.minLength(minLength)),
    fieldDecorator(username, getMaxFieldLengthError(username, maxLength), Validators.maxLength(maxLength)),
    fieldDecorator(username, requiredFieldError, Validators.required)
  ]
}
