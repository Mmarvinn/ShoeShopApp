import { USER_SIGN_IN } from '../../api';

export const userSignIn = async (data) => {
  try {
    const response = await fetch(USER_SIGN_IN, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
