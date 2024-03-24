function queryStringify(data: {}): string {
  if (Object.keys(data).length === 0) {
    return '';
  }

  return `?${Object.entries(data)
    .map(([key, val]) => `${key}=${val}`)
    .join('&')
    .toString()}`;
}

export { queryStringify };
