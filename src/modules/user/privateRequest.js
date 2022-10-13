import { getJwtToken } from '../../services/localStorage';

export const privateRequestHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getJwtToken()}`,
});
