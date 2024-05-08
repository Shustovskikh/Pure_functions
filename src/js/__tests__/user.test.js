import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

describe('user', () => {
  test('loadUser calls httpGet and returns data', () => {
    httpGet.mockReturnValue(JSON.stringify({ name: 'user' }));

    const data = loadUser(1);

    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
    expect(data).toEqual({ name: 'user' });
  });

  test('saveUser throws error', () => {
    expect(() => saveUser({})).toThrow('Unimplemented');
  });
});
