  import axios, { AxiosRequestConfig } from 'axios';
  import {Application} from "../Domain/Application";
export class ExchangeConnectionTest {
  public static Run() : void {

    const publicKey = Application.Exchange.ApiPublicKey;
    const privateKey = Application.Exchange.ApiPrivateKey;
    const passphrase = Application.Exchange.ApiKeyPassphrase;

    const baseUrl = 'https://api.kucoin.com';
    const endpoint = `/api/${Application.Exchange.ApiVersion}/accounts`;

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
