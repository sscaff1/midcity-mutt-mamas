import { useMemo, useState } from 'react';
import type { Animal } from '../../types/Animal';
import './Dog.css';

interface DogProps {
  dog: Animal;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeUnknown = (traits: { label: string; value: any }[]) =>
  traits.filter((trait) => trait.value && trait.value !== 'Unknown');

function Dog({ dog }: DogProps) {
  console.log(dog);
  const photos = Array.isArray(dog.photos) ? dog.photos : [dog.photos];
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]?.large || dog.primary_photo_cropped?.large || '');

  const traits = useMemo(
    () =>
      removeUnknown([
        { label: 'Age', value: dog.age },
        { label: 'Size', value: dog.size },
        { label: 'Gender', value: dog.gender },
        { label: 'Primary Breed', value: dog.breeds.primary },
        { label: 'Secondary Breed', value: dog.breeds.secondary || 'None' },
        { label: 'Mixed Breed', value: dog.breeds.mixed ? 'Yes' : 'No' },
        { label: 'Coat', value: dog.breeds.coat || 'Unknown' },
      ]),
    [dog],
  );

  const attributes = useMemo(
    () =>
      removeUnknown([
        { label: 'Spayed/Neutered', value: dog.attributes.spayed_neutered },
        { label: 'House Trained', value: dog.attributes.house_trained },
        { label: 'Special Needs', value: dog.attributes.special_needs },
        { label: 'Shots Current', value: dog.attributes.shots_current },
      ]),
    [dog],
  );

  const environment = useMemo(
    () =>
      removeUnknown([
        { label: 'Good with Children', value: dog.environment.children },
        { label: 'Good with Dogs', value: dog.environment.dogs },
        { label: 'Good with Cats', value: dog.environment.cats },
      ]),
    [dog],
  );

  return (
    <div className="dog-container">
      <div className="dog-section">
        <h1 className="dog-name">{dog.name}</h1>
        {/* Photo Gallery */}
        <div className="dog-gallery">
          <div className="dog-main-photo">
            <img src={selectedPhoto} alt={dog.name} className="dog-photo" />
          </div>
          {photos.length > 1 && (
            <div className="dog-thumbnails">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  className={`dog-thumbnail ${selectedPhoto === photo.large ? 'selected' : ''}`}
                  onClick={() => setSelectedPhoto(photo.large)}
                >
                  <img src={photo.small} alt={`${dog.name} - Photo ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dog Information */}
      <div className="dog-info">
        {/* Basic Traits */}
        <div className="dog-section">
          <h2>About {dog.name}</h2>
          <div className="dog-traits">
            {traits.map((trait, index) => (
              <div key={index} className="dog-trait">
                <span className="trait-label">{trait.label}:</span>
                <span className="trait-value">{trait.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="dog-section">
          <h2>Description</h2>
          <p className="dog-description">{dog.description}</p>
          <a
            className="inline-block mt-6 text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            href={dog.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn More on Petfinder
          </a>
        </div>

        {/* Attributes */}
        {attributes.length > 0 && (
          <div className="dog-section">
            <h2>Attributes</h2>
            <div className="dog-attributes">
              {attributes.map((attr, index) => (
                <div key={index} className={`dog-attribute ${attr.value ? 'positive' : 'negative'}`}>
                  <span className="attribute-label">{attr.label}</span>
                  <span className="attribute-value">{attr.value ? 'Yes' : 'No'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Environment */}
        {environment.length > 0 && (
          <div className="dog-section">
            <h2>Environment</h2>
            <div className="dog-environment">
              {environment.map((env, index) => (
                <div key={index} className={`dog-environment-item ${env.value ? 'positive' : 'negative'}`}>
                  <span className="environment-label">{env.label}</span>
                  <span className="environment-value">
                    {env.value ? 'Yes' : env.value === false ? 'No' : 'Unknown'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {dog.videos?.length > 0 && (
          <div className="dog-section">
            <h2>Videos</h2>
            <div className="dog-videos">
              {dog.videos.map((video, index) => (
                <div key={index} className="dog-video">
                  <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="dog-section">
          <h2>Contact Information</h2>
          <div className="dog-contact">
            <p>Email: {dog.contact.email}</p>
            {dog.contact.phone && <p>Phone: {dog.contact.phone}</p>}
            <p>
              Location: {dog.contact.address.city}, {dog.contact.address.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dog;
