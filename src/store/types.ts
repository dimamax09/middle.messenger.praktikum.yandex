enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: HttpMethods;
  data?: any;
};

export { HttpMethods };
export type { Options };
