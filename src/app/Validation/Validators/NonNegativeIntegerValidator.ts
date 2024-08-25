import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class NonNegativeIntegerValidator extends Validator<number> {

  public Validate(value: number): ValidationResult {
    const validationResult = new ValidationResult();

    const isNumber = typeof value === "number";
    let isInteger = false;

    if (isNumber) {
      isInteger = Number.isInteger(value);
    }

    let isNonNegative = false;

    if (isInteger) {
      isNonNegative = value >= 0;
    }

    const isValid = isNumber && isInteger && isNonNegative;

    if (!isValid) {
      if (!isNumber) {
        validationResult.Errors.push("Value must be a number.");
      } else if (!isInteger) {
        validationResult.Errors.push("Value must be an integer.");
      } else if (!isNonNegative) {
        validationResult.Errors.push("Value must be non-negative.");
      }
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }
}
