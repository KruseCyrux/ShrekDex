import { Link, useParams } from 'react-router-dom';

import movies from '../../data/movies.json';

import GalleryCarousel
  from '../../components/GalleryCarousel/GalleryCarousel';

import DetailsTable
  from '../../components/DetailsTable/DetailsTable';

import DownloadButtons
  from '../../components/DownloadButtons/DownloadButtons';

import './MediaDetail.scss';

const MediaDetail = () => {

  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === id
  );

  if (!movie) {
    return (
      <section className="not-found">

        <h1>
          Película no encontrada
        </h1>

        <Link to="/movies">
          ← Volver a películas
        </Link>

      </section>
    );
  }

  return (
    <article className="media-detail">

      <Link
        to="/movies"
        className="back-link"
      >
        ← Volver a películas
      </Link>

      <header className="detail-heading">

        <span>
          {movie.type} · {movie.year}
        </span>

        <h1>
          {movie.title}
        </h1>

      </header>

      <section className="detail-intro">

        <div className="detail-cover">

          <img
            src={movie.cover}
            alt={`Póster de ${movie.title}`}
          />

        </div>

        <div className="detail-description">

          <h2>
            Sobre la película
          </h2>

          <p>
            {movie.description}
          </p>

        </div>

      </section>

      <section className="detail-section">

        <h2>
          Galería
        </h2>

        <GalleryCarousel
          images={movie.gallery}
          title={movie.title}
        />

      </section>

      <section className="detail-section">

        <h2>
          Datos generales
        </h2>

        <DetailsTable
          details={movie.details}
        />

      </section>

      <section className="detail-section">

        <h2>
          Descargas
        </h2>

        <DownloadButtons
          downloads={movie.downloads}
        />

      </section>

    </article>
  );
};

export default MediaDetail;