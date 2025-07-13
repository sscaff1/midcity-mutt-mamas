import { Link } from 'react-router';

const mamas = [
  {
    name: 'Mutt Mama Prez.',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_dfaba4416f684f36898957045f14afc0~mv2.jpg/v1/crop/x_0,y_0,w_529,h_641/fill/w_612,h_769,al_c,lg_1,q_85,enc_avif,quality_auto/BabyHannah_edited_edited.jpg',
    description:
      'My name is Hannah Davis, I was lucky enough to grow up on a farm with a wonderful mother who taught me love and empathy towards all animals. Looking forward to continuing the dream of walking these doggos into their loving, forever homes. We appreciate your support in allowing us to do that.',
  },
  {
    name: 'Sue McCormick',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_56491026aac9417ba619b579a6bf2b3a~mv2.png/v1/crop/x_22,y_0,w_326,h_408/fill/w_454,h_571,al_c,lg_1,q_85,enc_avif,quality_auto/SueandBear_edited.png',
    description:
      'I grew up with Boxers but also loving horses. I was able to fulfill the dream of having a horse at 59...she was a rescue.  I had dreamed of being a large animal vet but very few women were accepted way back then. Instead I became a physical therapist...53  yrs now! Over the years my love, respect and empathy for animals has grown exponentially. I have 5 rescues, 2 are adopted from this rescue. Sweet George & Miss Lola.',
  },
  {
    name: 'DJ',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_2209aab7a2904b22aef9809d19ce5da0~mv2.png/v1/crop/x_281,y_0,w_1019,h_1274/fill/w_652,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5541_edited.png',
    description:
      "Dj has always been an animal lover and caregiver. They've been in the pet care industry for over a decade and are overjoyed to be a part of the Mutt Mamas' mission!",
  },
  {
    name: 'Whitney',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_34eba32f43624a5cb8af5e5077bcf77d~mv2.png/v1/crop/x_0,y_94,w_2320,h_2900/fill/w_652,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/whitneyWeb_HEIC.png',
    description: '',
  },
  {
    name: 'Maddi',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_5be66470c6dc4b828916166a3c6bd7e1~mv2.png/v1/crop/x_0,y_126,w_3024,h_3780/fill/w_652,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/maddiandpenny_HEIC.png',
    description: '',
  },
  {
    name: 'Sarah',
    profileImg:
      'https://static.wixstatic.com/media/e6f709_f635588c7eb84e8eb99f05ef851cfd9d~mv2.jpg/v1/crop/x_19,y_0,w_1088,h_1360/fill/w_652,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sarahandwendy_JPG.jpg',
    description:
      'I&apos;ve never known a home without a dog. As a kid who moved around too much to have any real stability, our pets were some of the only constants I could really rely on. When I went to college out of state, I was struck by how quiet it was. For the very first time, I had to make a home without the collars jingling and the nails click clacking on the hardwood floor. And it was HARD. I didn&apos;t realize it at the time, but for the next few years while I studied advertising, I was almost exclusively accumulating friends with dogs. I was like the self-appointed dog walker/sitter/trainer/groomer. And I loved it. After I graduated, I got a job writing commercial scripts for Ford and knew something was missing. When the COVID-19 Pandemic hit, Ford reduced their creative force and I was out of a job. I was stuck at home, and like many, I decided to bring home a companion. Unlike the dogs I grew up with, Wendy was deaf and highly driven. The process of learning how to communicate with her was like putting together a puzzle. All of a sudden, that light I&apos;d felt working with all my friends&apos; dogs in college sparked up again. Since bringing Wendy home, I&apos;ve worked with a wide range of clients that need help with everything from basic potty-training to behavior modification and aggression. Wendy and I now do Search and Rescue, making her the first deaf pitbull to take on this kind of work. I have a particular love of scent work (SAR, medical alert, etc.) and behavior modification. But overall, I have a passion for helping owners understand their dogs.',
  },
];

function MeetTheMamas() {
  return (
    <>
      <meta title="Meet the Mamas - Mid City Mutt Mamas" />
      <meta
        name="description"
        content="Get to know the dedicated team behind Mid City Mutt Mamas, a New Orleans-based dog rescue organization."
      />
      <title>Meet the Mamas | Mid City Mutt Mamas</title>

      <div className="flex-grow max-w-[1280px] mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-8 px-4 bg-white rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Meet the Mamas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated team behind Mid City Mutt Mamas. Each of us brings our unique experience and
            passion for animal welfare to help give dogs their second chance at life.
          </p>
        </section>

        {/* Mamas Grid */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mamas.map((mama, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img src={mama.profileImg} alt={mama.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{mama.name}</h3>
                  {mama.description && <p className="text-gray-600 text-sm leading-relaxed">{mama.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Join Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Adopt</h3>
              <p className="text-gray-600 mb-4">Give a loving home to one of our rescued dogs.</p>
              <Link
                to="/adopt"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Learn About Adoption →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Foster</h3>
              <p className="text-gray-600 mb-4">Provide temporary care for dogs in need.</p>
              <Link
                to="/foster"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
              >
                Learn About Fostering →
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team and help make a difference.</p>
              <Link
                to="/contact-us"
                className="inline-block px-4 py-2 bg-[#5f8576] text-white rounded-md hover:bg-[#537467] transition-colors"
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

export default MeetTheMamas;
