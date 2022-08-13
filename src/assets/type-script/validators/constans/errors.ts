import {capitalize} from "../../functions";

export const requiredFieldError = 'This field is required.';
export const wrongEmailError = 'Email is not correct.';

export function getMinFieldLengthError(fieldName: string, expected: number): string{
  return `${capitalize(fieldName)} must have at least ${expected} characters.`
}

export function getMaxFieldLengthError(fieldName: string, expected: number): string{
  return `${capitalize(fieldName)} must have less than ${expected} characters.`
}

