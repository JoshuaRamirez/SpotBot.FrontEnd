import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class DecimalPlacesValidator extends Validator<string> {
  public MaxDecimalPlaces: number = 2;

  public Validate(value: string): ValidationResult {
    const validationResult = new ValidationResult();

    const regex = new RegExp(`^\\d+(\\.\\d{0,${this.MaxDecimalPlaces}})?$`);
    const matchesPattern = regex.test(value);

    if (!matchesPattern) {
      validationResult.Errors.push(`Must have ${this.MaxDecimalPlaces} decimal places or less`);
    }

    validationResult.IsValid = matchesPattern;

    return validationResult;
  }
}
