import {capitalize} from "../../functions";

export const requiredFieldError = 'This field is required.';
export const wrongEmailError = 'Email is not correct.';
// username = fields.String(required=True, validate=Length(min=3, max=15))

export function getMinFieldLengthError(fieldName: string, expected: number): string{
  return `${capitalize(fieldName)} must have at least ${expected} characters.`
}

export function getMaxFieldLengthError(fieldName: string, expected: number): string{
  return `${capitalize(fieldName)} must have less than ${expected} characters.`
}

