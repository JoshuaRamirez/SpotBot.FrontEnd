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
  }
  public Id: number;
  public UserId: number;
  public Token: string;
  public CreationTime: Date;
  public ExpirationTime: Date;
  public LastActivityTime: Date;
  public UserAgent: string;
  public IpAddress: string;
}
