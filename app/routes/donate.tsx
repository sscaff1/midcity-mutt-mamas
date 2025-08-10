import { Link } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import {
  AMAZON_URL,
  CHEWY_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PAYPAL_URL,
  VENMO_URL,
  ZEFFY_URL,
} from '~/utils/constants';
import SectionSpecial from '~/components/SectionSpecial/SectionSpecial';

function Donate() {
  return (
    <>
      <meta title="Donate - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Support Mid City Mutt Mamas by making a donation to help us continue our mission of rescuing and rehoming dogs in need."
      />
      <title>Donate | Mid City Mutt Mamas</title>
      {/* Hero Section */}
      <section className="text-center py-8 px-4 bg-[#5f8576]">
        <h1 className="text-4xl font-bold mb-4 text-white-800">Support Our Mission</h1>
        <p className="text-xl text-white-600 max-w-2xl mx-auto">
          At Mid City Mutt, we passionately rescue dogs from high-kill shelters, abandoned in the streets, or on country
          roads. We also take in owner surrenders, providing them with the vetting, training, and love they deserve. We
          are a 501(c)(3) nonprofit organization dedicated to saving dogs. Your donation helps us give these deserving
          animals a second chance at life.
        </p>
      </section>
      {/* Donation Options */}
      <div className="bg-white">
        <section className="bg-white p-8 max-w-[1280px] mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">Make a Donation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/donate1.jpg" alt="Zeffy" className="w-auto  h-60 mx-auto mb-4 rounded-lg shadow-md" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Venmo</h3>
              <p className="text-gray-600 mb-4">Send your donation via Venmo</p>
              <a
                href={VENMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                <FaHeart className="mr-1 inline-block relative top-[-2px]" /> Donate with Venmo
              </a>
            </div>
            <div className="text-center">
              <img src="/donate2.jpg" alt="Zeffy" className="w-auto  h-60 mx-auto mb-4 rounded-lg shadow-md" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">PayPal</h3>
              <p className="text-gray-600 mb-4">Send your donation via PayPal</p>
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                <FaHeart className="mr-1 inline-block relative top-[-2px]" /> Donate with PayPal
              </a>
            </div>
            <div className="text-center">
              <img src="/donate3.jpg" alt="Zeffy" className="w-auto  h-60 mx-auto mb-4 rounded-lg shadow-md" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Zeffy</h3>
              <p className="text-gray-600 mb-4">Send your donation via Zeffy</p>
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                <FaHeart className="mr-1 inline-block relative top-[-2px]" /> Donate with Zeffy
              </a>
            </div>
          </div>
        </section>
      </div>
      <SectionSpecial>
        <div className="flex-grow max-w-4xl mx-auto px-4 py-8 space-y-12">
          {/* How Your Donation Helps */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">How Your Donation Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <i className="bi bi-heart-fill text-[#5f8576] text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Medical Care</h3>
                </div>
                <p className="text-gray-600">Vaccinations, spay/neuter surgeries, and emergency medical treatment</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <i className="bi bi-house-fill text-[#5f8576] text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Shelter & Care</h3>
                </div>
                <p className="text-gray-600">Food, shelter, and daily care for our rescue dogs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <i className="bi bi-book-fill text-[#5f8576] text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Training</h3>
                </div>
                <p className="text-gray-600">Behavioral training and socialization programs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <i className="bi bi-truck-fill text-[#5f8576] text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold text-gray-800">Transportation</h3>
                </div>
                <p className="text-gray-600">Rescue missions and transport to forever homes</p>
              </div>
            </div>
          </section>
        </div>
        {/* Giving section */}
        <div className="p-8 relative">
          <img
            src="/maje-banner.jpeg"
            alt="Mid City Mutt Mamas"
            className="w-full h-full object-cover absolute inset-0 object-[0%_0%] sm:object-[0%_93%]"
          />
          <div className="flex">
            <div className="sm:flex-1"></div>
            <div className="flex-1 relative z-10 py-4 sm:py-22">
              <h2 className="text-6xl text-white font-bold mb-6 text-gray-800">Other Ways to Help</h2>
              <div className="pb-24 sm:p-0">
                <p className="text-white sm:text-gray-900 text-2xl mb-1">
                  Learn about all the ways you can support our pets.
                </p>
                <p className="text-white sm:text-gray-900 text-2xl">
                  Shop to support the pups, get involved, spread the word!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Other Ways to Help */}
        <div className="p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                We&apos;re always looking for volunteers to help with dog walking, fostering, and events. Contact us to
                learn more about volunteer opportunities.
              </p>
              <Link
                to="/contact-us"
                className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Contact Us →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Follow us on social media and share our posts to help us reach more potential adopters and supporters.
              </p>
              <div className="flex gap-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Facebook →
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Instagram →
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">View our Wishlists</h3>
              <p className="text-gray-600 mb-4">View MMM's wishlists for much needed items!</p>
              <div className="flex gap-4">
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Amazon →
                </a>
                <a
                  href={CHEWY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Chewy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionSpecial>
    </>
  );
}

export default Donate;
