import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class IpAddressValidator extends Validator<string> {

  private _ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  private _ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6}))$/i;

  public Validate(value: string): ValidationResult {
    const validationResult = new ValidationResult();

    const isString = typeof value === "string";
    let matchesIPv4 = false;
    let matchesIPv6 = false;

    if (isString) {
      matchesIPv4 = this._ipv4Regex.test(value);
      matchesIPv6 = this._ipv6Regex.test(value);
    }

    const isValid = isString && (matchesIPv4 || matchesIPv6);

    if (!isString) {
      validationResult.Errors.push("Value must be a string.");
    }

    if (!matchesIPv4 && !matchesIPv6) {
      validationResult.Errors.push("Must be a valid IPv4 or IPv6 address.");
    }

    validationResult.IsValid = isValid;

    return validationResult;
  }
}
