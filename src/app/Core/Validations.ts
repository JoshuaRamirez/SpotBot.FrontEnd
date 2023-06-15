import validator from "validator";
import {ValidationResult} from "./ValidationResult";

export class Validations {

  public static PriceValue(priceValue: string): ValidationResult {
    const value = priceValue;
    let result = Validations.Required(value);
    if (result.IsInvalid) {
      result.Message = 'Number required.'
      return result;
    }
    result = Validations.IsNumeric(value);
    if (result.IsInvalid) {
      return result;
    }
    result = Validations.DecimalPlaces(4, value);
    if (result.IsInvalid) {
      return result;
    }
    return result;
  }

  public static Required(value: string): ValidationResult {
    const result = new ValidationResult();
    result.IsValid = true;
    if (!value.length) {
      result.Message = 'Value required';
      result.IsValid = false;
    }
    return result;
  }

  public static DecimalPlaces(maxDecimalPlaces: number, value: string): ValidationResult {
    const result = new ValidationResult();
    result.IsValid = true;
    const isDecimal = validator.isDecimal(value);
    if (!isDecimal) {
      result.Message = 'Decimal required';
      result.IsValid = false;
      return result;
    }
    if (isDecimal) {
      const decimalValue = Number.parseFloat(value);
      const decimalPlaces = Validations.CountDecimalPlaces(decimalValue);
      if (decimalPlaces > maxDecimalPlaces) {
        result.Message = 'Must have 4 decimal places or less';
        result.IsValid = false;
        return result;
      }
    }
    return result;
  }

  public static CountDecimalPlaces(num: number): number {
    const decimalPart = String(num).split('.')[1];
    if (decimalPart) {
      return decimalPart.length;
    }
    return 0;
  }

  static IsNumeric(value: string) : ValidationResult {
    const result = new ValidationResult();
    result.IsValid = true;
    const isNumeric = validator.isNumeric(value);
    if (!isNumeric) {
      result.Message = 'Number required';
      result.IsValid = false;
    }
    return result;
  }
}
