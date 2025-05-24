import { Application } from './Application';
import { UserTokenResource } from '../Resources/UserTokenResource';

describe('Application', () => {
  beforeEach(() => {
    Application.UserToken = new UserTokenResource();
  });

  describe('GetUserId', () => {
    it('returns the user id when set', () => {
      Application.UserToken.UserId = 7;
      expect(Application.GetUserId()).toBe(7);
    });

    it('throws when user id is missing', () => {
      Application.UserToken.UserId = 0;
      expect(() => Application.GetUserId()).toThrowError('UserToken.UserId is null or undefined.');
    });
  });

  it('generates a guid in the correct format', () => {
    const guid = Application.NewGuid();
    expect(guid).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/);
  });
});
