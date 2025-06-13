import { Link } from 'react-router';

function Foster() {
  return (
    <>
      <meta title="Foster - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Learn about our fostering program and how you can help provide temporary homes for dogs in need at Mid City Mutt Mamas."
      />
      <title>Foster | Mid City Mutt Mamas</title>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Become a Foster Parent</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fostering saves lives! By opening your home to a foster dog, you&apos;re giving them a second chance while
            they wait for their forever family.
          </p>
        </section>

        {/* Why Foster */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Foster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-heart-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Save Lives</h3>
              </div>
              <p className="text-gray-600">
                Each foster home opens up space in our rescue for another dog in need. You&apos;re directly helping us
                save more lives.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-house-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Home Environment</h3>
              </div>
              <p className="text-gray-600">
                Dogs thrive in home environments where they can learn house manners and receive individual attention.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-star-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Perfect Match</h3>
              </div>
              <p className="text-gray-600">
                Fostering helps us learn more about each dog&apos;s personality, making it easier to find their perfect
                forever home.
              </p>
            </div>
          </div>
        </section>

        {/* Foster Process */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">How Fostering Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Apply</h3>
              </div>
              <p className="text-gray-600">
                Complete our foster application. We&apos;ll review your information and discuss your preferences and
                experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Match</h3>
              </div>
              <p className="text-gray-600">
                We&apos;ll match you with a dog that fits your lifestyle and experience level. We consider your home
                environment and schedule.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#11b7b3] text-white flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Support</h3>
              </div>
              <p className="text-gray-600">
                We provide all necessary supplies, medical care, and ongoing support. You&apos;re never alone in your
                fostering journey.
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
                Help your foster dog find their forever home! You&apos;ll play a key role in the adoption process.
              </p>
            </div>
          </div>
        </section>

        {/* Foster Requirements */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Foster Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-house-fill text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Home & Environment</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Must be at least 21 years old</li>
                <li>• Must have landlord approval if renting</li>
                <li>• Must have a secure, fenced yard (for most dogs)</li>
                <li>• Must be able to keep foster dog separate from resident pets if needed</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-calendar-check text-[#11b7b3] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Time & Commitment</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Must be available for vet appointments</li>
                <li>• Must be able to provide daily care and attention</li>
                <li>• Must be willing to work on basic training</li>
                <li>• Must be available for adoption meet and greets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Medical Care</h3>
              <p className="text-gray-600">
                All veterinary care is covered, including: • Spay/neuter • Vaccinations • Medications • Emergency care
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Supplies</h3>
              <p className="text-gray-600">
                We provide essential supplies: • Food • Crate • Bedding • Toys • Basic training tools
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Support</h3>
              <p className="text-gray-600">
                Ongoing support including: • 24/7 emergency contact • Training guidance • Behavior support • Adoption
                assistance
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our foster family and help save lives, one dog at a time. Have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="inline-block px-6 py-3 bg-[#11b7b3] text-white rounded-md hover:bg-[#0fa39f] transition-colors text-lg"
              >
                Contact Us to Foster →
              </Link>
              <Link
                to="/adopt"
                className="inline-block px-6 py-3 bg-gray-50 text-gray-800 rounded-md hover:bg-gray-100 transition-colors text-lg"
              >
                Learn About Adoption →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Foster;
