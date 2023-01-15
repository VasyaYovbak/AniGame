import {fieldDecorator} from "../decorators";
import {email} from "../constans/field-names";
import {getMaxFieldLengthError, requiredFieldError, wrongEmailError} from "../constans/errors";
import {Validators} from "@angular/forms";
import {emailMaxLength} from "../constans/field-constrains";

export function getEmailValidators() {
  return [
    fieldDecorator(email, getMaxFieldLengthError(email, emailMaxLength), Validators.maxLength(emailMaxLength)),
    fieldDecorator(email, wrongEmailError, Validators.email),
    fieldDecorator(email, requiredFieldError, Validators.required),
  ]
}
