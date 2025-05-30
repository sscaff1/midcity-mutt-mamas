import type { Token } from '../types/Token';

const API_URL = 'https://api.petfinder.com/v2/oauth2/token';

let token: Token;

const params = new URLSearchParams();
params.append('grant_type', 'client_credentials');
params.append('client_id', process.env.PET_FINDER_API_KEY || '');
params.append('client_secret', process.env.PET_FINDER_API_SECRET || '');

const getToken = async ({ shouldRefetch = false } = {}) => {
  if (token && !shouldRefetch) {
    return token;
  }
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });
  token = (await response.json()) as Token;
  return token;
};

export default getToken;
