export class ExchangeScreenData {
  constructor() {
    this.Id = "";
    this.ApiVersion = "";
    this.ApiKeyPassphrase = "";
    this.ApiPrivateKey = "";
    this.ApiPublicKey = "";
    this.Tested = false;
    this.TestResult = false;
  }
  public Id: string;
  public Tested: boolean;
  public TestResult: boolean;
  public ApiPublicKey: string;
  public ApiPrivateKey: string;
  public ApiKeyPassphrase: string;
  public ApiVersion: string;
}
