import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class RequiredValidator extends Validator<any> {

  public Validate(value: any): ValidationResult {
    const validationResult = new ValidationResult();

    const isDefined = value !== undefined;
    const isNotNull = value !== null;
    const isPresent = isDefined && isNotNull;

    let hasLength = true;
    const isString = typeof value === 'string';
    const isArray = Array.isArray(value);

    if (isString || isArray) {
      hasLength = value.length > 0;
    }

    const isValid = isPresent && hasLength;

    if (!isValid) {
      validationResult.Errors.push("Value Required");
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }
}
