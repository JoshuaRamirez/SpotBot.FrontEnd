export class ValidationResult {
  constructor() {
    this._isValid = false;
    this.Message = '';
  }
  private _isValid: boolean;
  public get Css(): {'is-valid': boolean, 'is-invalid': boolean} | null {
    return {
      'is-valid': this.IsValid,
      'is-invalid': this.IsInvalid
    }
  };
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
  public Message: string;
}
