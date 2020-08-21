import config from '../config';
import request from 'axios';

const getUsers = async (): Promise<any> => {
  const users = await request.get(`${config.apiBaseUrl}/users`);
  return users.data;
};

export { getUsers };
