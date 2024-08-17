export class AccountsResource {
  public Id: string;
  public Currency: string;
  public Type: string;
  public Balance: number;
  public Available: number;
  public Holds: number;

  constructor() {
    this.Id = '';
    this.Currency = '';
    this.Type = '';
    this.Balance = 0;
    this.Available = 0;
    this.Holds = 0;
  }
}
