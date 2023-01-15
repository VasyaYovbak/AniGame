/* This file contains constrains that are used for validating fields. */
export const emailMaxLength: number = 199;
export const emailMinLength: number = 3;
export const usernameMinLength: number = 3;
export const usernameMaxLength: number = 15;
export const passwordMinLength: number = 8;
export const passwordSpecialChars: Set<string> = new Set(['$', '@', '#', '%', '/', '!', '&', '|']);
export const digits: Set<string> = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
