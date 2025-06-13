import { Link } from 'react-router';
import { FACEBOOK_URL, INSTAGRAM_URL, PAYPAL_URL, VENMO_URL, ZEFFY_URL } from '~/utils/constants';

function Donate() {
  return (
    <>
      <meta title="Donate - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Support Mid City Mutt Mamas by making a donation to help us continue our mission of rescuing and rehoming dogs in need."
      />
      <title>Donate | Mid City Mutt Mamas</title>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Mid City Mutt, we passionately rescue dogs from high-kill shelters, abandoned in the streets, or on
            country roads. We also take in owner surrenders, providing them with the vetting, training, and love they
            deserve. Your donation helps us give these deserving animals a second chance at life.
          </p>
        </section>

        {/* Donation Options */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Make a Donation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Venmo</h3>
              <p className="text-gray-600 mb-4">Send your donation via Venmo</p>
              <a
                href={VENMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
              >
                Donate with Venmo →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">PayPal</h3>
              <p className="text-gray-600 mb-4">Send your donation via PayPal</p>
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
              >
                Donate with PayPal →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Zeffy</h3>
              <p className="text-gray-600 mb-4">Send your donation via Zeffy</p>
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
              >
                Donate with Zeffy →
              </a>
            </div>
          </div>
        </section>

        {/* How Your Donation Helps */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How Your Donation Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-heart-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Medical Care</h3>
              </div>
              <p className="text-gray-600">Vaccinations, spay/neuter surgeries, and emergency medical treatment</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-house-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Shelter & Care</h3>
              </div>
              <p className="text-gray-600">Food, shelter, and daily care for our rescue dogs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-book-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Training</h3>
              </div>
              <p className="text-gray-600">Behavioral training and socialization programs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-truck-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Transportation</h3>
              </div>
              <p className="text-gray-600">Rescue missions and transport to forever homes</p>
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                We&apos;re always looking for volunteers to help with dog walking, fostering, and events. Contact us to
                learn more about volunteer opportunities.
              </p>
              <Link
                to="/contact-us"
                className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
              >
                Contact Us →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Follow us on social media and share our posts to help us reach more potential adopters and supporters.
              </p>
              <div className="flex gap-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
                >
                  Facebook →
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors"
                >
                  Instagram →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Donate;
