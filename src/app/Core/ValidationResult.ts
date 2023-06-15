  export class ValidationResult {
  constructor() {
    this._isValid = false;
    this.Message = '';
    this.IsDirty = false;
  }
  private _isValid: boolean;
  public get Css(): {'is-valid': boolean, 'is-invalid': boolean} | null {
    return {
      'is-valid': this.IsSuccess,
      'is-invalid': this.IsError
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
  public IsDirty: boolean;
  public get IsError(): boolean {
    if (this.IsDirty && this.IsInvalid) {
      return true;
    } else
      return  false;
  }
  public get IsSuccess(): boolean {
    if (this.IsDirty && this.IsValid) {
      return true;
    } else
      return  false;
  }
}
