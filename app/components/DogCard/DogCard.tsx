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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
