import {Buffer} from "buffer";

export class Obfuscation {
  private static readonly _key: string = "circumlocutious";

  public static Deobfuscate(input: string): string {
    let result: string = input;

    // Reverse Layer 5: Replace some characters
    result = result.replace(/#/g, 'C').replace(/@/g, 'B').replace(/!/g, 'A');

    // Reverse Layer 4: Base64 decoding
    result = Buffer.from(result, 'base64').toString('utf-8');

    // Reverse Layer 3: XOR with the custom key
    let xorKey: string = Obfuscation._key;
    result = Obfuscation.xor(result, xorKey);

    // Reverse Layer 2: Reverse the string
    result = result.split('').reverse().join('');

    // Reverse Layer 1: Base64 decoding
    result = Buffer.from(result, 'base64').toString('utf-8');

    return result;
  }

  private static xor(input: string, key: string): string {
    let resultChars: string[] = [];

    for (let i = 0; i < input.length; i++) {
      let inputChar = input.charCodeAt(i);
      let keyChar = key.charCodeAt(i % key.length);
      let xorChar = inputChar ^ keyChar;
      resultChars.push(String.fromCharCode(xorChar));
    }

    return resultChars.join('');
  }
}

