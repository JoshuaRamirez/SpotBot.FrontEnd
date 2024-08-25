import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class NumericValidator extends Validator<string> {

  public Validate(value: string): ValidationResult {
    const validationResult = new ValidationResult();

    const isValid = /^[0-9]+(\.[0-9]+)?$/.test(value);
    if (!isValid) {
      validationResult.Errors.push("Valid number required.");
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }

}
