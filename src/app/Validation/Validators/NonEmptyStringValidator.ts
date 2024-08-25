import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class NonEmptyStringValidator extends Validator<string> {

  public MinLength: number = 1;

  public Validate(value: string): ValidationResult {
    const validationResult = new ValidationResult();

    const isString = typeof value === "string";
    let hasContent = false;

    if (isString) {
      hasContent = value.trim() !== "";
    }

    let meetsMinLength = false;

    if (hasContent) {
      meetsMinLength = value.trim().length >= this.MinLength;
    }

    const isValid = isString && hasContent && meetsMinLength;

    if (!isString) {
      validationResult.Errors.push("Value must be a string.");
    } else if (!hasContent) {
      validationResult.Errors.push("String must have content and not be empty.");
    } else if (!meetsMinLength) {
      validationResult.Errors.push(`String must be at least ${this.MinLength} character(s) long.`);
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }
}
