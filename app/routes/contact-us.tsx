import { EMAIL_URL, ETSY_URL, FACEBOOK_URL, INSTAGRAM_URL, NEWSLETTER_URL } from '~/utils/constants';

function ContactUs() {
  return (
    <>
      <meta title="Contact Us - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Get in touch with Mid City Mutt Mamas to learn more about adoption, fostering, or volunteering opportunities."
      />
      <title>Contact Us | Mid City Mutt Mamas</title>
      <div className="flex-grow max-w-[1280px] mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption, fostering, or volunteering? We&apos;d love to hear from you! Reach out to us
            and we&apos;ll get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-envelope-fill text-[#5f8576] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For general inquiries, adoption questions, or to learn more about our organization, please email us. We
                typically respond to emails within 24-48 hours. For urgent matters regarding animal welfare or
                emergencies, please call your local animal control or emergency services.
              </p>
              <a
                href={`mailto:${EMAIL_URL}`}
                className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                {EMAIL_URL} →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className="bi bi-envelope-fill text-[#5f8576] text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-gray-800">Join our Newsletter</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Want to keep up with the cutest pups in town? You&apos;ll get the inside scoop on our adoptable dogs,
                rescue stories, training tips, and plenty more tail wagging content.
              </p>
              <a
                href={NEWSLETTER_URL}
                className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Sign Up →
              </a>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Follow Us</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest news, events, and available dogs by following us on social media.
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
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Support our store</h3>
              <p className="text-gray-600 mb-4">
                Support our store by buying our products. All proceeds go to the rescue.
              </p>
              <div className="flex gap-4">
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Etsy →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
