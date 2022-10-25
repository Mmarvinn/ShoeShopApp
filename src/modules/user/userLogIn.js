import { USER_LOG_IN } from '../../api';

export const userLogIn = async (data) => {
  const response = await fetch(USER_LOG_IN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};
