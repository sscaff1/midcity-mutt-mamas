import { Link } from 'react-router';

function Adopt() {
  return (
    <>
      <meta title="Adopt a Dog - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Learn about our adoption process and find your perfect furry companion at Mid City Mutt Mamas."
      />
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Adopt a Dog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Give a loving home to one of our rescued dogs. Each adoption helps us save more lives and continue our
            mission of providing second chances to dogs in need.
          </p>
        </section>

        {/* Adoption Process */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Adoption Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Meet & Greet</h3>
              </div>
              <p className="text-gray-600">
                Schedule a meet and greet with your potential new family member. This helps ensure it&apos;s a good
                match for everyone involved.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Application</h3>
              </div>
              <p className="text-gray-600">
                Complete our adoption application. We&apos;ll review your information to ensure the best possible match
                for both you and the dog.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Home Visit</h3>
              </div>
              <p className="text-gray-600">
                We&apos;ll schedule a home visit to ensure your living situation is suitable for your potential new
                family member.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Adoption</h3>
              </div>
              <p className="text-gray-600">
                Once approved, complete the adoption paperwork and welcome your new family member home!
              </p>
            </div>
          </div>
        </section>

        {/* Adoption Requirements */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Adoption Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-house-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Housing</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Must be at least 21 years old</li>
                <li>• Must own your home or have landlord approval</li>
                <li>• Must have a secure, fenced yard (for most dogs)</li>
                <li>• All current pets must be spayed/neutered and up to date on vaccinations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-heart-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Commitment</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Must be committed to providing a lifetime home</li>
                <li>• Must be able to provide proper veterinary care</li>
                <li>• Must be willing to work on training and behavior</li>
                <li>• Must be prepared for the financial responsibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Meet Your New Best Friend?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              View our available dogs and start your journey to finding the perfect companion. Have questions?
              We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.shelterluv.com/matchme/adopt/KREW/Dog"
                className="inline-block px-6 py-3 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply for Adoption →
              </a>
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-gray-50 text-gray-800 rounded-md hover:bg-gray-100 transition-colors text-lg"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Adopt;
