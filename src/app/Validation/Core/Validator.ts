import {ValidationResult} from "./ValidationResult";
import {IValidator} from "./IValidator";

export abstract class Validator<T> implements IValidator<T>  {
  public abstract Validate(value: T): ValidationResult;
}
