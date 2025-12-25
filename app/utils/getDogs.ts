import type { Animal } from '../types/Animal';
import { searchAnimals, mapGraphQLAnimalToAnimal } from './graphql';

const getDogs = async (): Promise<Animal[]> => {
  const graphqlAnimals = await searchAnimals(100, 0);
  return graphqlAnimals.filter((animal) => animal != null).map(mapGraphQLAnimalToAnimal);
};

export default getDogs;
