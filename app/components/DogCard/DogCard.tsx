import './DogCard.css';
import { Link } from 'react-router';

interface DogCardProps {
  name: string;
  imageUrl: string;
  description: string;
  age?: string;
  breed?: string;
  gender?: 'Male' | 'Female';
  id: string;
}

function DogCard({ name, imageUrl, description, age, breed, gender, id }: DogCardProps) {
  return (
    <article className="dog-card">
      <div className="dog-card-image-container">
        <img src={imageUrl} alt={`${name}, a ${breed || 'dog'}`} className="dog-card-image" />
        {gender && <span className="dog-card-gender">{gender}</span>}
      </div>

      <div className="dog-card-content">
        <h3 className="dog-card-name">{name}</h3>

        <div className="dog-card-details">
          {age && <span className="dog-card-detail">{age}</span>}
          {breed && <span className="dog-card-detail">{breed}</span>}
        </div>

        <p className="dog-card-description">{description}</p>

        <Link
          className="text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          to={`/dogs/${id}`}
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export default DogCard;
