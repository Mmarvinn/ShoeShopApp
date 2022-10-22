import { useState } from 'react';

export const useMakeRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (cb, ...args) => {
    setLoading(true);

    try {
      const result = await cb(...args);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { request, loading, error };
};
