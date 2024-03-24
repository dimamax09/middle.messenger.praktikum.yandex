import { initMainHandlers } from './events/main-events.ts';
import { initAllComponents } from './utils/components.ts';
import HttpClient from './services/request-client/http-client.ts';
import { HttpMethods } from './store/types.ts';

initAllComponents();
initMainHandlers();

new HttpClient()
  .get('https://jsonplaceholder.typicode.com/users', {
    data: {},
    method: HttpMethods.GET,
  })
  .then((xhr) => {
    console.log(xhr.response);
  });
