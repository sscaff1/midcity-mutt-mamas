import type { Animal } from '~/types/Animal';

interface RandomDogProps {
  dogs?: Animal[];
  randomIndex?: number;
}

function RandomDog({ dogs }: RandomDogProps) {
  if (!dogs || dogs.length === 0) return null;
  const randomDog = dogs[Math.floor(Math.random() * dogs.length)];
  return (
    <div className="flex flex-col items-center">
      <img
        src={randomDog.photos[0].small}
        alt={`${randomDog.name} - Available for adoption`}
        className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0 shadow-md"
      />
      <p className="text-sm text-gray-500 mt-2 text-center">
        Meet {randomDog.name} - one of the pups you&apos;re helping! 🐕
      </p>
    </div>
  );
}

export default RandomDog;
