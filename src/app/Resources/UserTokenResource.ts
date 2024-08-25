import {Validations} from "../Validation/Validations";

export class UserTokenResource {
    constructor() {
        this.Id = 0;
        this.UserId = 0;
        this.Token = "";
        this.CreationTime = new Date();
        this.ExpirationTime = new Date();
        this.LastActivityTime = new Date();
        this.UserAgent = "";
        this.IpAddress = "";
        this.ValidationErrors = {};
        this.IsValidated = false;
        this.IsValid = false;
    }

    public Id: number;
    public UserId: number;
    public Token: string;
    public CreationTime: Date;
    public ExpirationTime: Date;
    public LastActivityTime: Date;
    public UserAgent: string;
    public IpAddress: string;
    public ValidationErrors: { [key: string]: string[] };
    public IsValidated: Boolean;
    public IsValid: Boolean;

  public Validate(resource: UserTokenResource = this): boolean {
    const validateNonNegIntId = Validations.NonNegativeInteger(resource.Id);
    const validateNonNegIntIdErrors = validateNonNegIntId.Errors;
    const validateNonNegIntIdIsValid = validateNonNegIntId.IsValid;
    this.ValidationErrors["Id"] = [...validateNonNegIntIdErrors];

    const validateNonNegIntUserId = Validations.NonNegativeInteger(resource.UserId);
    const validateNonNegIntUserIdErrors = validateNonNegIntUserId.Errors;
    const validateNonNegIntUserIdIsValid = validateNonNegIntUserId.IsValid;
    this.ValidationErrors["UserId"] = [...validateNonNegIntUserIdErrors];

    const validateNonEmptyToken = Validations.NonEmptyString(resource.Token);
    const validateNonEmptyTokenErrors = validateNonEmptyToken.Errors;
    const validateNonEmptyTokenIsValid = validateNonEmptyToken.IsValid;
    this.ValidationErrors["Token"] = [...validateNonEmptyTokenErrors];

    const validateCreationDate = Validations.ValidDate(resource.CreationTime);
    const validateCreationDateErrors = validateCreationDate.Errors;
    const validateCreationDateIsValid = validateCreationDate.IsValid;
    this.ValidationErrors["CreationTime"] = [...validateCreationDateErrors];

    const validateExpiryDate = Validations.ValidDate(resource.ExpirationTime);
    const validateExpiryDateErrors = validateExpiryDate.Errors;
    const validateExpiryDateIsValid = validateExpiryDate.IsValid;
    this.ValidationErrors["ExpirationTime"] = [...validateExpiryDateErrors];

    const validateActivityDate = Validations.ValidDate(resource.LastActivityTime);
    const validateActivityDateErrors = validateActivityDate.Errors;
    const validateActivityDateIsValid = validateActivityDate.IsValid;
    this.ValidationErrors["LastActivityTime"] = [...validateActivityDateErrors];

    const validateDateGreater = Validations.DateGreaterThan(resource.ExpirationTime, resource.CreationTime);
    const validateDateGreaterErrors = validateDateGreater.Errors;
    const validateDateGreaterIsValid = validateDateGreater.IsValid;
    this.ValidationErrors["DateComparison"] = [...validateDateGreaterErrors];

    const validateNonEmptyUserAgent = Validations.NonEmptyString(resource.UserAgent);
    const validateNonEmptyUserAgentErrors = validateNonEmptyUserAgent.Errors;
    const validateNonEmptyUserAgentIsValid = validateNonEmptyUserAgent.IsValid;
    this.ValidationErrors["UserAgent"] = [...validateNonEmptyUserAgentErrors];

    const validateIpAddress = Validations.ValidIpAddress(resource.IpAddress);
    const validateIpAddressErrors = validateIpAddress.Errors;
    const validateIpAddressIsValid = validateIpAddress.IsValid;
    this.ValidationErrors["IpAddress"] = [...validateIpAddressErrors];

    return validateNonNegIntIdIsValid
      && validateNonNegIntUserIdIsValid
      && validateNonEmptyTokenIsValid
      && validateCreationDateIsValid
      && validateExpiryDateIsValid
      && validateActivityDateIsValid
      && validateDateGreaterIsValid
      && validateNonEmptyUserAgentIsValid
      && validateIpAddressIsValid;
  }

}
