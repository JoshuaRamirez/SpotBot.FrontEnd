import { AxiosResponse } from 'axios';
import { HttpResourceApi } from '../src/app/Core/HttpResourceApi';
import { MOCK_USERS } from './test-data/users';

/**
 * Patches the custom `HttpResourceApi` so mock data can be returned
 * at the last possible moment before an HTTP request is executed.
 */
let installed = false;

export function installTestApi(): void {
  if (installed) {
    return;
  }
  installed = true;

  const axios = (HttpResourceApi as any)._axios;
  if (!axios) {
    console.warn('Test API could not access HttpResourceApi axios instance');
    return;
  }

  axios.interceptors.request.use((config) => {
    const url = config.url?.replace('//', '/');
    if (url && url.endsWith('/users')) {
      config.adapter = async () => {
        const response: AxiosResponse = {
          data: MOCK_USERS,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        };
        return Promise.resolve(response);
      };
    }
    return config;
  });
}
