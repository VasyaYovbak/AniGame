import {fieldDecorator} from "../decorators";
import {email} from "../constans/field-names";
import {requiredFieldError, wrongEmailError} from "../constans/errors";
import {Validators} from "@angular/forms";

export function getEmailValidators() {
  return [fieldDecorator(email, wrongEmailError, Validators.email),
    fieldDecorator(email, requiredFieldError, Validators.required)]
}
