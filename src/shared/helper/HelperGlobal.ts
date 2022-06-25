import { AxiosResponse } from 'axios';
import { ServerResponse } from './server-response';
import * as _ from 'lodash';

export class HelperGlobal {
  static handleResponsePetition<T>(response: AxiosResponse): T {
    const serverResponse = response.data as ServerResponse<T>;
    if (!serverResponse.succeeded) {
      throw new Error(serverResponse.error);
    }
    return serverResponse.data;
  }

  static isObject(val: any): boolean {
    return _.isObject(val);
  }
}
