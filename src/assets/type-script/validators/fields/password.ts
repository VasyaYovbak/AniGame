import {Validators} from "@angular/forms";
import {fieldDecorator} from "../decorators";
import {password} from "../constans/field-names";
import {getHasDigitsError, getMinFieldLengthError, getHasSpecialCharsError, requiredFieldError} from "../constans/errors";
import {passwordMinLength, passwordSpecialChars} from "../constans/field-constrains";
import {containsSpecialCharsValidator} from "../custom/special-chars";
import {containsDigitsValidator} from "../custom/digit";

export function getPasswordValidators(minLength: number = passwordMinLength) {
  return [
    fieldDecorator(password, getHasSpecialCharsError(password, passwordSpecialChars), containsSpecialCharsValidator()),
    fieldDecorator(password, getHasDigitsError(password), containsDigitsValidator()),
    fieldDecorator(password, getMinFieldLengthError(password, minLength), Validators.minLength(minLength)),
    fieldDecorator(password, requiredFieldError, Validators.required)
  ]
}
