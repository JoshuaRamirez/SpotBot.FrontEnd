import { ValidationResult } from "../Core/ValidationResult";
import { Validator } from "../Core/Validator";

export class DateGreaterThan extends Validator<{ earlierDate: Date, laterDate: Date }> {

  public Validate(values: { earlierDate: Date, laterDate: Date }): ValidationResult {
    const { earlierDate, laterDate } = values;

    const validationResult = new ValidationResult();

    const isEarlierDateInstance = earlierDate instanceof Date;
    const isLaterDateInstance = laterDate instanceof Date;

    let isEarlierDateValid = false;
    let isLaterDateValid = false;

    if (isEarlierDateInstance) {
      isEarlierDateValid = !isNaN(earlierDate.valueOf());
    } else {
      validationResult.Errors.push("Earlier date must be a valid Date instance.");
    }

    if (isEarlierDateInstance && !isEarlierDateValid) {
      validationResult.Errors.push("Earlier date must be a valid date.");
    }

    if (isLaterDateInstance) {
      isLaterDateValid = !isNaN(laterDate.valueOf());
    } else {
      validationResult.Errors.push("Later date must be a valid Date instance.");
    }

    if (isLaterDateInstance && !isLaterDateValid) {
      validationResult.Errors.push("Later date must be a valid date.");
    }

    const areBothDatesValid = isEarlierDateValid && isLaterDateValid;
    let isLaterAfterEarlier = false;

    if (areBothDatesValid) {
      isLaterAfterEarlier = laterDate > earlierDate;
    }

    if (areBothDatesValid && !isLaterAfterEarlier) {
      validationResult.Errors.push("Later date must be after earlier date.");
    }

    validationResult.IsValid = isEarlierDateInstance &&
      isLaterDateInstance &&
      areBothDatesValid &&
      isLaterAfterEarlier;

    return validationResult;
  }
}
