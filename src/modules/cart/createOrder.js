import { createOrderUrl } from '../../api';
import { privateRequestHeadersAcceptAndContent } from '../user/privateRequest';

export const createOrderApi = async (data) => {
  const response = await fetch(createOrderUrl(), {
    method: 'POST',
    headers: privateRequestHeadersAcceptAndContent(),
    body: JSON.stringify(data),
  });

  return response;
};
