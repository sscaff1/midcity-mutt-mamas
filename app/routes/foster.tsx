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
      {/* Hero Section */}

      <div className="bg-[url(/papyrus.png)] bg-repeat py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <section className="text-center py-8 px-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Become a Foster Parent</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fostering saves lives! By opening your home to a foster dog, you&apos;re giving them a second chance while
              they wait for their forever family.
            </p>
            <a
              className="inline-block mt-6 text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              target="_blank"
              href="/foster-app.pdf"
              rel="noreferrer noopener"
            >
              Download Foster Application
            </a>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download the above application and email it to{' '}
              <a href="mailto:midcitymutt@gmail.com">midcitymutt@gmail.com</a>
            </p>
          </section>
          <section className="flex items-center justify-center">
            <img
              src="/maje.jpg"
              alt="Foster Hero"
              className="h-[350px] object-cover object-[center_10%] rounded-lg drop-shadow-lg border-4 border-white"
            />
          </section>
        </div>
      </div>
      <div className="flex-grow max-w-[1280px] mx-auto px-4 py-8 space-y-12">
        {/* Why Foster */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Foster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#5f85764d] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-heart-fill text-[#5f8576] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Save Lives</h3>
              </div>
              <p className="text-gray-600">
                Each foster home opens up space in our rescue for another dog in need. You&apos;re directly helping us
                save more lives.
              </p>
            </div>
            <div className="bg-[#5f85764d] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-house-fill text-[#5f8576] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Home Environment</h3>
              </div>
              <p className="text-gray-600">
                Dogs thrive in home environments where they can learn house manners and receive individual attention.
              </p>
            </div>
            <div className="bg-[#5f85764d] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-star-fill text-[#5f8576] text-2xl mr-3"></i>
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
                <div className="w-8 h-8 rounded-full bg-[#5f8576] text-white flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800">Apply</h3>
              </div>
              <p className="text-gray-600">
                Complete our{' '}
                <a
                  target="_blank"
                  href="/foster-app.pdf"
                  rel="noreferrer noopener"
                  className="font-bold text-[#5f8576] hover:text-[#0a7372]"
                >
                  foster application
                </a>
                . We&apos;ll review your information and discuss your preferences and experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#5f8576] text-white flex items-center justify-center font-bold mr-3">
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
                <div className="w-8 h-8 rounded-full bg-[#5f8576] text-white flex items-center justify-center font-bold mr-3">
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
                <div className="w-8 h-8 rounded-full bg-[#5f8576] text-white flex items-center justify-center font-bold mr-3">
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
                <i className="bi bi-house-fill text-[#5f8576] text-2xl mr-3"></i>
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
                <i className="bi bi-calendar-check text-[#5f8576] text-2xl mr-3"></i>
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
                className="inline-block px-6 py-3 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors text-lg"
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
