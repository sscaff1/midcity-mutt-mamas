import { Link, useLoaderData, data } from 'react-router';
import getDogs from '../utils/getDogs';
import getToken from '../utils/getToken';
import Dogs from '../components/Dogs/Dogs';
import { getFromCache, setInCache } from '~/utils/cache';
import { PiDog, PiPawPrint, PiPiggyBank } from 'react-icons/pi';
import type { Animal } from '~/types/Animal';
import RandomDog from '../components/RandomDog/RandomDog';
import './home.css';

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
  let dogs;
  try {
    dogs = await getDogs({ token });
  } catch (error) {
    console.error(error);
    dogs = [] as Animal[];
  }

  setInCache(cacheKey, dogs, 1000 * 60 * 360); // cache for 6 hours
  console.log('Cache miss');
  return data(dogs, { headers: { 'X-Cache': 'MISS' } });
}

function Home() {
  const dogs = useLoaderData<typeof loader>() || [];

  return (
    <>
      <meta title="Home - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Welcome to Mid City Mutt Mamas, a New Orleans-based dog rescue organization dedicated to saving and rehoming dogs in need."
      />
      <title>Home | Mid City Mutt Mamas</title>

      {/* Hero Section */}
      <section className="py-16 px-8 relative">
        <img
          src="/homepage-hero.jpg"
          alt="Mid City Mutt Mamas"
          className="absolute inset-0 w-full h-full object-cover scale-x-[-1] sm:object-top-right object-[30%_0%] sm:brightness-100 brightness-80"
        />

        <div className="relative z-10 max-w-sm">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Mid City Mutt Mamas</h1>
          <p className="text-xl text-white">
            The Krewe of Mid City Mutt Mamas dream big and love even bigger. Here at Mid City Mutts, we are dedicated to
            rescuing and giving second chances to homeless and displaced canine community members. Every dog, puppy and
            senior alike, deserves a fair chance at a caring and joyful life and we will not rest until that is
            accomplished.
          </p>
        </div>
      </section>

      {/* Silent Auction Section */}
      <div className="px-4 py-8 max-w-[1280px] mx-auto">
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Silent Auction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <RandomDog dogs={dogs} />
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
                href="https://www.zeffy.com/en-US/ticketing/krewe-of-mid-city-mutt-mamass-silent-auction-3?fbclid=IwdGRjcAMpQIljbGNrAylAd2V4dG4DYWVtAjExAAEeRJPkbf7C_hHYB7QX-1UmGJc6-7llmdqa8IzGIZ5If5OGy_0EUXPF2HWD2ys_aem_XijlX0UW6UeVUGLicBQiEQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors font-semibold text-lg"
              >
                View Silent Auction →
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Adoptable Dogs Section */}
      <section className="text-center py-8 px-4 bg-white border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Adoptable Dogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dogs dogs={dogs} />
        </div>
      </section>

      {/* How to Help Section */}
      <section className="p-8 p-y-12 relative">
        <img
          src="/background-paw.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover brightness-170"
        />
        <div className="relative z-10 ">
          <h2 className="text-6xl font-bold mb-8 text-gray-800 text-center">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-gray-800">
                <PiDog className="inline-block mr-2 mt-[-2px]" /> Adopt
              </h3>
              <p className="text-gray-600 mb-4">Give a loving home to one of our rescued dogs.</p>
              <Link
                to="/adopt"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-gray-800">
                <PiPawPrint className="inline-block mr-2 mt-[-2px]" /> Foster
              </h3>
              <p className="text-gray-600 mb-4">Provide temporary care for dogs in need.</p>
              <Link
                to="/foster"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Become a Foster →
              </Link>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-gray-800">
                <PiPiggyBank className="inline-block mr-2 mt-[-2px]" /> Donate
              </h3>
              <p className="text-gray-600 mb-4">Support our mission with your contribution.</p>
              <Link
                to="/donate"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
