import type { Animal } from '../types/Animal';
import { getAnimalById, mapGraphQLAnimalToAnimal } from './graphql';

const getDog = async ({ id }: { id: string }): Promise<Animal> => {
  const graphqlAnimal = await getAnimalById(id);
  if (!graphqlAnimal) {
    throw new Error(`Animal with id ${id} not found`);
  }
  return mapGraphQLAnimalToAnimal(graphqlAnimal);
};

export default getDog;
