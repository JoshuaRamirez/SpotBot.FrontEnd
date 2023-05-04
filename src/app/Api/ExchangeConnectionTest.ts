  import axios, { AxiosRequestConfig } from 'axios';
  import {Application} from "../Data/Application";
export class ExchangeConnectionTest {
  public static Run() : void {

    const publicKey = Application.ExchangeSecrets.ApiPublicKey;
    const privateKey = Application.ExchangeSecrets.ApiPrivateKey;
    const passphrase = Application.ExchangeSecrets.ApiKeyPassphrase;

    const baseUrl = 'https://api.kucoin.com';
    const endpoint = `/api/${Application.ExchangeSecrets.ApiVersion}/accounts`;

    const config: AxiosRequestConfig = {
      baseURL: baseUrl,
      url: endpoint,
      method: 'GET',
      headers: {
        'KC-API-KEY': publicKey,
        'KC-API-SECRET': privateKey,
        'KC-API-PASSPHRASE': passphrase,
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        // Process the response data as needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occur during the request
      });

  }
}
