/* eslint-disable unicorn/prevent-abbreviations */
import createClient from 'openapi-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const client = createClient<any>({
  baseUrl: 'http://localhost:3000/',
});


