import { Link, useLoaderData, data } from 'react-router';
import getDogs from '../utils/getDogs';
import getToken from '../utils/getToken';
import Dogs from '../components/Dogs/Dogs';
import { getFromCache, setInCache } from '~/utils/cache';

export async function loader() {
  const cacheKey = 'dogs';
  const cached = getFromCache(cacheKey);

  if (cached) {
    console.log('Cache hit');
    return data(cached, { headers: { 'X-Cache': 'HIT' } });
  }

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

  setInCache(cacheKey, dogs, 1000 * 60 * 360); // cache for 6 hours
  console.log('Cache miss');
  return data(dogs, { headers: { 'X-Cache': 'MISS' } });
}

function Home() {
  const dogs = useLoaderData<typeof loader>();

  // Get a random dog for the silent auction section
  const randomDog = dogs.length > 0 ? dogs[Math.floor(Math.random() * dogs.length)] : null;

  return (
    <>
      <meta title="Home - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Welcome to Mid City Mutt Mamas, a New Orleans-based dog rescue organization dedicated to saving and rehoming dogs in need."
      />
      <title>Home | Mid City Mutt Mamas</title>
      <div className="flex-grow max-w-[1280px] mx-auto px-4 py-8 space-y-12">
        {/* Silent Auction Section */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Silent Auction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {randomDog && (
              <div className="text-center md:text-left max-w-md mx-auto">
                <img
                  src={randomDog.photos[0].small}
                  alt={`${randomDog.name} - Available for adoption`}
                  className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0 shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Meet {randomDog.name} - one of the pups you&apos;re helping! 🐕
                </p>
              </div>
            )}
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6">
                🎉 Our Silent Auction is LIVE for the Krewe of Mid City Mutt Mamas doggos! 🐾
              </p>
              <p className="text-gray-600 mb-6">
                Bid on amazing items and help us raise much-needed funds for the pups in our care. The auction is still
                open for new items, so if you have something to donate—big or small—just DM me to add it in!
              </p>
              <p className="text-gray-600 mb-8">
                Let&apos;s make a difference together. Every bid helps a dog in need 💛
              </p>
              <a
                href="https://www.zeffy.com/en-US/ticketing/krewe-of-mid-city-mutt-mamass-silent-auction-2?fbclid=IwY2xjawK__xVleHRuA2FlbQIxMQBicmlkETFxV0RpbnplNmFGYkVVVFRjAR4DsqBj4pO4UeiADBuLrm5sr84cKoLGz7pTSRmImQ5hBXuVGfuKTwNNA2cO4g_aem_zDQw_51kddcslomjBPW4hA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors font-semibold text-lg"
              >
                View Silent Auction →
              </a>
            </div>
          </div>
        </section>
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
            <Dogs dogs={dogs} />
          </div>
        </section>

        {/* How to Help Section */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Adopt</h3>
              <p className="text-gray-600 mb-4">Give a loving home to one of our rescued dogs.</p>
              <Link
                to="/adopt"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Foster</h3>
              <p className="text-gray-600 mb-4">Provide temporary care for dogs in need.</p>
              <Link
                to="/foster"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Become a Foster →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Donate</h3>
              <p className="text-gray-600 mb-4">Support our mission with your contribution.</p>
              <Link
                to="/donate"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
