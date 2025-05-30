import type { Animal } from '../types/Animal';
import type { Token } from '../types/Token';

const getDog = async ({ token, id }: { token: Token; id: string }) => {
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  const data = (await response.json()) as { animal: Animal };
  return data.animal;
};

export default getDog;
