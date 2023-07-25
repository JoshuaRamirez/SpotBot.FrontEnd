import * as CryptoJS from 'crypto-js';

export class Encryption {
  private readonly key: CryptoJS.lib.WordArray;
  public constructor(keyString: string) {
    this.key = CryptoJS.enc.Base64.parse(keyString);
  }

  public Encrypt(value: string): string {
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted = CryptoJS.AES.encrypt(value, this.key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const combined = CryptoJS.lib.WordArray.create();
    combined.concat(iv);
    combined.concat(encrypted.ciphertext);
    return CryptoJS.enc.Base64.stringify(combined);
  }

  public Decrypt(value: string): string {
    const wordArray = CryptoJS.enc.Base64.parse(value);
    const iv = CryptoJS.lib.WordArray.create(wordArray.words.slice(0, 4));
    const encrypted = CryptoJS.lib.WordArray.create(wordArray.words.slice(4));
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: encrypted
    });
    const decrypted = CryptoJS.AES.decrypt(cipherParams, this.key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
