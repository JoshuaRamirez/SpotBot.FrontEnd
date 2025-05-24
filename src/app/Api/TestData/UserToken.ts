export interface UserToken {
  id: number;
  userId: number;
  token: string;
}

export const MOCK_USER_TOKEN: UserToken = {
  id: 1,
  userId: 1,
  token: 'mock-token'
};
