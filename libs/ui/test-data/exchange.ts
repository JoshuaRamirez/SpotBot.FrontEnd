export interface Exchange {
  id: string;
  apiVersion: string;
  apiPublicKey: string;
  apiPrivateKey: string;
  apiKeyPassphrase: string;
}

export const MOCK_EXCHANGE: Exchange = {
  id: 'exch1',
  apiVersion: 'v1',
  apiPublicKey: 'public',
  apiPrivateKey: 'private',
  apiKeyPassphrase: 'passphrase'
};
