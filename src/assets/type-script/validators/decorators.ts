import {ValidatorFn} from "@angular/forms";

export function fieldDecorator(fieldName: string, errorMessage: string, validator: ValidatorFn): ValidatorFn {
  return (control) => {
    const data = validator(control);
    if (data === null) {
      return null;
    }
    return {[fieldName]: errorMessage};
  }
}
