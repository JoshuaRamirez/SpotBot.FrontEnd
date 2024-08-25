import {ValidationResult} from "./Core/ValidationResult";
import {Validation} from "./Validation";
import {DateValidator} from "./Validators/DateValidator";
import {DateGreaterThan} from "./Validators/DateGreaterThan";
import {DecimalPlacesValidator} from "./Validators/DecimalPlacesValidator";
import {IpAddressValidator} from "./Validators/IpAddressValidator";
import {NonEmptyStringValidator} from "./Validators/NonEmptyStringValidator";
import {NonNegativeIntegerValidator} from "./Validators/NonNegativeIntegerValidator";
import {NumericValidator} from "./Validators/NumericValidator";
import {PriceValueValidator} from "./Validators/PriceValueValidator";
import {RequiredValidator} from "./Validators/RequiredValidator";

export class Validations {
  private static _validation: Validation = new Validation();

  public static NonNegativeInteger(value: any): ValidationResult {
    return this._validation.Validate(NonNegativeIntegerValidator, value);
  }

  public static NonEmptyString(value: any): ValidationResult {
    return this._validation.Validate(NonEmptyStringValidator, value);
  }

  public static ValidDate(value: any): ValidationResult {
    return this._validation.Validate(DateValidator, value);
  }

  public static DateGreaterThan(laterDate: Date, earlierDate: Date): ValidationResult {
    return this._validation.Validate(DateGreaterThan, { laterDate, earlierDate });
  }

  public static ValidIpAddress(value: any): ValidationResult {
    return this._validation.Validate(IpAddressValidator, value);
  }

  public static Numeric(value: any): ValidationResult {
    return this._validation.Validate(NumericValidator, value);
  }

  public static DecimalPlaces(value: any, decimalPlaces: number): ValidationResult {
    const validator = new DecimalPlacesValidator();
    validator.MaxDecimalPlaces = decimalPlaces
    return this._validation.Validate(validator, value)
  }

  public static Price(value: any): ValidationResult {
    return this._validation.Validate(PriceValueValidator, value);
  }

  public static Required(value: any): ValidationResult {
    return this._validation.Validate(RequiredValidator, value);
  }
}
