import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class DateValidator extends Validator<Date> {

  public Validate(value: Date): ValidationResult {
    const validationResult = new ValidationResult();

    const isDateInstance = value instanceof Date;

    let hasValidTime = false;

    if (isDateInstance) {
      hasValidTime = !isNaN(value.getTime());
    }

    const isValid = isDateInstance && hasValidTime;

    if (!isDateInstance) {
      validationResult.Errors.push("Must be an instance of Date.");
    }

    if (isDateInstance && !hasValidTime) {
      validationResult.Errors.push("Must be a valid date.");
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }
}
