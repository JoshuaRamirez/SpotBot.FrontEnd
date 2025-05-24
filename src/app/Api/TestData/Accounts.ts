export interface Account {
  id: string;
  currency: string;
  type: string;
  balance: number;
  available: number;
  holds: number;
}

export const MOCK_ACCOUNTS: Account[] = [
  { id: 'acc1', currency: 'USD', type: 'trade', balance: 1000, available: 800, holds: 200 },
  { id: 'acc2', currency: 'BTC', type: 'trade', balance: 2, available: 2, holds: 0 }
];
