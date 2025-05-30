import DogCard from '../components/DogCard/DogCard';
import getToken from '../utils/getToken';
import getDogs from '../utils/getDogs';
import { useLoaderData } from 'react-router';

export function meta() {
  return [
    { title: 'Mid City Mutt Mamas - Dog Rescue in New Orleans' },
    {
      name: 'description',
      content:
        'Mid City Mutt Mamas is a New Orleans-based dog rescue organization dedicated to saving and rehoming dogs in need.',
    },
  ];
}

export const loader = async () => {
  let token;
  try {
    token = await getToken();
  } catch (error: unknown) {
    if (error instanceof DOMException && error.code === 401) {
      token = await getToken({ shouldRefetch: true });
    }
  }
  if (!token) {
    throw new Error('Failed to get token');
  }
  const dogs = await getDogs({ token });
  return { dogs };
};

function Home() {
  const { dogs } = useLoaderData<typeof loader>();
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Mid City Mutt Mamas</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The Krewe of Mid City Mutt Mamas dream big and love even bigger. Here at Mid City Mutts, we are dedicated to
          rescuing and giving second chances to homeless and displaced canine community members. Every dog, puppy and
          senior alike, deserves a fair chance at a caring and joyful life and we will not rest until that is
          accomplished.
        </p>
      </section>

      {/* Adoptable Dogs Section */}
      <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Adoptable Dogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* How to Help Section */}
      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How You Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Adopt</h3>
            <p className="text-gray-600 mb-4">Give a loving home to one of our rescued dogs.</p>
            <a
              href="/adopt"
              className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
            >
              Learn More →
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Foster</h3>
            <p className="text-gray-600 mb-4">Provide temporary care for dogs in need.</p>
            <a
              href="/foster"
              className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
            >
              Become a Foster →
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Donate</h3>
            <p className="text-gray-600 mb-4">Support our mission with your contribution.</p>
            <a
              href="/donate"
              className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
            >
              Donate Now →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
