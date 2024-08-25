export interface IValidationErrors {
  DequeueErrors(): string[];
  ListErrors(): string[];
  ClearErrors(): void;
}
