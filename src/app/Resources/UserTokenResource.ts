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
        this.ValidationErrors = [];
    }

    public Id: number;
    public UserId: number;
    public Token: string;
    public CreationTime: Date;
    public ExpirationTime: Date;
    public LastActivityTime: Date;
    public UserAgent: string;
    public IpAddress: string;
    public ValidationErrors: Array<string>;

    public Validate(resource: UserTokenResource = this): boolean {
        const validateNonNegIntId = Validations.NonNegativeInteger(resource.Id).IsValid;
        const validateNonNegIntUserId = Validations.NonNegativeInteger(resource.UserId).IsValid;
        const validateNonEmptyToken = Validations.NonEmptyString(resource.Token).IsValid;
        const validateCreationDate = Validations.ValidDate(resource.CreationTime).IsValid;
        const validateExpiryDate = Validations.ValidDate(resource.ExpirationTime).IsValid;
        const validateActivityDate = Validations.ValidDate(resource.LastActivityTime).IsValid;
        const validateDateGreater = Validations.DateGreaterThan(resource.ExpirationTime, resource.CreationTime).IsValid;
        const validateNonEmptyUserAgent = Validations.NonEmptyString(resource.UserAgent).IsValid;
        const validateIpAddress = Validations.ValidIpAddress(resource.IpAddress).IsValid;

        return validateNonNegIntId
            && validateNonNegIntUserId
            && validateNonEmptyToken
            && validateCreationDate
            && validateExpiryDate
            && validateActivityDate
            && validateDateGreater
            && validateNonEmptyUserAgent
            && validateIpAddress;
    }
}
