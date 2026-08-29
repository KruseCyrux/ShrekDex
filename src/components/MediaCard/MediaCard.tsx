import { Link } from 'react-router-dom';

import './MediaCard.scss';

interface MediaCardProps {
  id: string;

  category: string;

  title: string;
  year: number;
  cover: string;
  description: string;
  type: string;
}

const MediaCard = ({
  id,
  category,
  title,
  year,
  cover,
  description,
  type,
}: MediaCardProps) => {  
  return (
    <article className="media-card">

      <Link
        to={`/${category}/${id}`}
        className="media-card-link"
      >

        <div className="media-card-image">
          <img
            src={cover}
            alt={`Póster de ${title}`}
          />

          <span className="media-card-type">
            {type}
          </span>
        </div>

        <div className="media-card-content">

          <h3>
            {title}
          </h3>

          <span className="media-card-year">
            {year}
          </span>

          <p>
            {description}
          </p>

          <span className="media-card-more">
            Ver ficha →
          </span>

        </div>

      </Link>

    </article>
  );
};

export default MediaCard;