import { USER_SIGN_IN } from '../../api';

export const userSignIn = async (data) => {
  const response = await fetch(USER_SIGN_IN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};
