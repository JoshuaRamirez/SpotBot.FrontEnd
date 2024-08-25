import { DecimalPlacesValidator } from "./DecimalPlacesValidator";
import { NumericValidator } from "./NumericValidator";
import { RequiredValidator } from "./RequiredValidator";
import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class PriceValueValidator extends Validator<string> {

  public Validate(value: string): ValidationResult {
    const validationResult = new ValidationResult();

    const requiredValidator = new RequiredValidator();
    const requiredResult = requiredValidator.Validate(value);
    if (!requiredResult.IsValid) {
      validationResult.Errors.push(...requiredResult.Errors);
    }

    const isNumericValidator = new NumericValidator();
    const numericResult = isNumericValidator.Validate(value);
    if (!numericResult.IsValid) {
      validationResult.Errors.push(...numericResult.Errors);
    }

    const decimalPlacesValidator = new DecimalPlacesValidator();
    const decimalResult = decimalPlacesValidator.Validate(value);
    if (!decimalResult.IsValid) {
      validationResult.Errors.push(...decimalResult.Errors);
    }

    validationResult.IsValid = requiredResult.IsValid && numericResult.IsValid && decimalResult.IsValid;

    return validationResult;
  }
}
