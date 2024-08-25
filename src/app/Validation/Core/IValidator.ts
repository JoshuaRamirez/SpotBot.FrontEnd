import {ValidationResult} from "./ValidationResult";

export interface IValidator<T> {
  Validate(value: T): ValidationResult;
}

