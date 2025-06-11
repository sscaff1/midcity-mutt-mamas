import type { Animal } from '~/types/Animal';
import DogCard from '../DogCard/DogCard';

interface DogsProps {
  dogs: Animal[];
}

function Dogs({ dogs }: DogsProps) {
  return (
    <>
      {dogs.map((dog) => (
        <DogCard
          key={`dog-card-${dog.id}`}
          name={dog.name}
          imageUrl={dog.primary_photo_cropped.small}
          description={dog.description}
          age={dog.age}
          breed={dog.breeds.primary}
          gender={dog.gender}
          id={dog.id.toString()}
        />
      ))}
    </>
  );
}

export default Dogs;
