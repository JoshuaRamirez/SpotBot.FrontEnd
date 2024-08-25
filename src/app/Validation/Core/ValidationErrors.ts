import {IValidationErrors} from "./IValidationErrors";

export class ValidationErrors implements IValidationErrors {
  private errors: string[] = [];

  public DequeueErrors(): string[] {
    const dequeuedErrors = [...this.errors];
    this.ClearErrors();
    return dequeuedErrors;
  }

  public ListErrors(): string[] {
    return [...this.errors];
  }

  public ClearErrors(): void {
    this.errors = [];
  }

  public AddError(message: string): void {
    this.errors.push(message);
  }
  public AddErrors(messages: string[]): void {
    this.errors.push(...messages);
  }
}
