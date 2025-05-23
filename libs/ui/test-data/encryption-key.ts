export interface EncryptionKey {
  id: number;
  userId: number;
  value: string;
}

export const MOCK_ENCRYPTION_KEY: EncryptionKey = {
  id: 1,
  userId: 1,
  value: 'mock-encryption-key'
};
