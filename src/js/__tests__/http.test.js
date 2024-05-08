import { httpGet, httpPost } from '../http';

describe('http', () => {
  test('httpGet throws error', () => {
    expect(() => httpGet('url')).toThrow('url');
  });

  test('httpPost throws error', () => {
    expect(() => httpPost('url')).toThrow('url');
  });
});
