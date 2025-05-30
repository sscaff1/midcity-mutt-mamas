import type { Animal } from '../types/Animal';
import type { Token } from '../types/Token';

const getDogs = async ({ token }: { token: Token }) => {
  const response = await fetch('https://api.petfinder.com/v2/animals?limit=100&organization=LA385&sort=-recent', {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  const data = (await response.json()) as { animals: Animal[] };
  return data.animals;
};

export default getDogs;
