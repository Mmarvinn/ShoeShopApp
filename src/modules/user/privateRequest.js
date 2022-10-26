import { getJwtToken } from '../../services/localStorage';

export const privateRequestHeadersContentType = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getJwtToken()}`,
});

export const privateRequestHeadersAccept = () => ({
  accept: 'application/json',
  Authorization: `Bearer ${getJwtToken()}`,
});

export const privateRequestHeadersAcceptAndContent = () => ({
  accept: 'application/json',
  Authorization: `Bearer ${getJwtToken()}`,
  'Content-Type': 'application/json',
});
