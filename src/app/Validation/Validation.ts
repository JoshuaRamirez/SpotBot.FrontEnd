import {ValidationResult} from "./Core/ValidationResult";
import {Validator} from "./Core/Validator";

export class Validation {

  public Validate<T, V extends Validator<T>>(ValidatorClassOrInstance: (new () => V) | V, value: T): ValidationResult {
    let validator: V;
    if (typeof ValidatorClassOrInstance === "function") {
      validator = new ValidatorClassOrInstance();
    } else {
      validator = ValidatorClassOrInstance;
    }
    const validationResult = validator.Validate(value);
    if (!validationResult.IsValid && validationResult.Errors.length === 0) {
      throw new Error("Validation failed but no errors were reported.");
    }
    return validationResult;
  }
}
