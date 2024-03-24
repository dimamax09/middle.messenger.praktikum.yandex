import { HttpMethods, Options } from '../../store/types.ts';
import { queryStringify } from '../../utils/get-query.ts';

class HttpClient {
  get(url: string, options: Options): Promise<XMLHttpRequest> {
    const getParams: string = queryStringify(options.data);

    return this.request(url + getParams, {
      ...options,
      data: {},
      method: HttpMethods.GET,
    });
  }

  post(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, {
      ...options,
      data: {},
      method: HttpMethods.POST,
    });
  }

  put(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, {
      ...options,
      data: {},
      method: HttpMethods.PUT,
    });
  }

  delete(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, {
      ...options,
      data: {},
      method: HttpMethods.DELETE,
    });
  }

  private request(
    url: string,
    options: Options = {
      data: {},
      method: HttpMethods.GET,
    },
  ): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.setRequestHeader('Access-Control-Allow-Methods','GET');

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === HttpMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HttpClient;
