export class ValidationResult {
  public constructor() {
    this._isValid = false;
    this.Errors = [];
  }
  private _isValid: boolean;
  public get IsInvalid(): boolean{
    return !this.IsValid;
  }
  public set IsInvalid(value: boolean) {
    this.IsValid = !value;
  }
  public get IsValid(): boolean {
    return this._isValid;
  }
  public set IsValid(value: boolean) {
    this._isValid = value;
  }
  public Errors: Array<string> = [];
  public get Error(): string {
    if (this.Errors.length > 0) {
      return this.Errors[0];
    } else {
      return "";
    }
  }
}
