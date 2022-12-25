import {capitalize, setToString} from "../../functions";

export const requiredFieldError: string = 'This field is required.';
export const wrongEmailError: string = 'Email is not correct.';

export function getMinFieldLengthError(fieldName: string, expected: number): string {
  return `${capitalize(fieldName)} must have at least ${expected} characters.`
}

export function getMaxFieldLengthError(fieldName: string, expected: number): string {
  return `${capitalize(fieldName)} must have less than ${expected} characters.`
}

export function getIsAlphaNumError(fieldName: string): string {
  return `${capitalize(fieldName)} must contain only digits and alphabetic letters.`
}

export function getIsAlphabeticError(fieldName: string): string {
  return `${capitalize(fieldName)} must contain only alphabetic letters.`
}

export function getHasSpecialCharsError(fieldName: string, specialChars: Set<string>): string {
  return `${capitalize(fieldName)} must contain at least one special character: ${setToString(specialChars)}`
}

export function getHasDigitsError(fieldName: string): string {
  return `${capitalize(fieldName)} must contain at least one digit.`
}

