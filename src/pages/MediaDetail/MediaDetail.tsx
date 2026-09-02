import {
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';

import movies from '../../data/movies.json';
import spinOffs from '../../data/spinOffs.json';
import shorts from '../../data/shorts.json';
import spinOffShorts from '../../data/spinOffShorts.json';
import series from '../../data/series.json';
import extras from '../../data/extras.json';
import videoGames from '../../data/videoGames.json';
import comics from '../../data/comics.json';
import books from '../../data/books.json';
import music from '../../data/music.json';

import GalleryCarousel
  from '../../components/GalleryCarousel/GalleryCarousel';

import DetailsTable
  from '../../components/DetailsTable/DetailsTable';

import DownloadButtons
  from '../../components/DownloadButtons/DownloadButtons';

import './MediaDetail.scss';

const MediaDetail = () => {
  const { id } = useParams();

  const location = useLocation();

  const getCollection = () => {
    if (location.pathname.startsWith('/movies/')) {
      return movies;
    }

    if (location.pathname.startsWith('/spin-offs/')) {
      return spinOffs;
    }

    if (location.pathname.startsWith('/shorts/')) {
      return shorts;
    }

    if (location.pathname.startsWith('/spin-off-shorts/')) {
      return spinOffShorts;
    }

    if (location.pathname.startsWith('/series/')) {
      return series;
    }

    if (location.pathname.startsWith('/extras/')) {
      return extras;
    }

    if (location.pathname.startsWith('/video-games/')) {
      return videoGames;
    }

    if (location.pathname.startsWith('/comics/')) {
      return comics;
    }

    if (location.pathname.startsWith('/books/')) {
      return books;
    }

    if (location.pathname.startsWith('/music/')) {
      return music;
    }

    return [];
  };

  const collection = getCollection();

  const media = collection.find(
    (item) => item.id === id
  );

  const backPath =

  location.pathname.startsWith('/spin-offs/')
    ? '/spin-offs'
    : location.pathname.startsWith('/shorts/')
      ? '/shorts'
      : location.pathname.startsWith('/spin-off-shorts/')
        ? '/spin-off-shorts'
        : location.pathname.startsWith('/series/')
          ? '/series'
          : location.pathname.startsWith('/video-games/')
            ? '/video-games'
            : location.pathname.startsWith('/comics/')
              ? '/comics'
              : location.pathname.startsWith('/books/')
                ? '/books'
                : location.pathname.startsWith('/music/')
                  ? '/music'
                  : location.pathname.startsWith('/extras/')
                    ? '/extras'
                    : '/movies';

  const backLabel =

  location.pathname.startsWith('/spin-offs/')
    ? '← Volver a Spin-Offs'
    : location.pathname.startsWith('/shorts/')
      ? '← Volver a Cortos'
      : location.pathname.startsWith('/spin-off-shorts/')
        ? '← Volver a Cortos Spin-Offs'
        : location.pathname.startsWith('/series/')
          ? '← Volver a Series'
          : location.pathname.startsWith('/video-games/')
            ? '← Volver a Videojuegos'
            : location.pathname.startsWith('/comics/')
              ? '← Volver a Cómics'
              : location.pathname.startsWith('/books/')
                ? '← Volver a Libros'
                : location.pathname.startsWith('/music/')
                  ? '← Volver a Música'
                  : location.pathname.startsWith('/extras/')
                    ? '← Volver a Extras'
                    : '← Volver a Películas';

  if (!media) {
    return (
      <section className="not-found">
        <h1>Contenido no encontrado</h1>

        <Link to={backPath}>
          {backLabel}
        </Link>
      </section>
    );
  }

  return (
    <article className="media-detail">

      <Link
        to={backPath}
        className="back-link"
      >
        {backLabel}
      </Link>

      <header className="detail-heading">
        <span>
          {media.type} · {media.year}
        </span>

        <h1>{media.title}</h1>
      </header>

      <section className="detail-intro">

        <div className="detail-cover">
          <img
            src={media.cover}
            alt={`Póster de ${media.title}`}
          />
        </div>

        <div className="detail-description">
          <h2>Descripción</h2>

          <p>
            {media.description}
          </p>
        </div>

      </section>

      <section className="detail-section">

        <h2>Galería</h2>

        <GalleryCarousel
          images={media.gallery}
          title={media.title}
        />

      </section>

      <section className="detail-section">

        <h2>Datos generales</h2>

        <DetailsTable
          details={media.details}
        />

      </section>

      <section className="detail-section">

        <h2>Descargas</h2>

        <DownloadButtons
          downloads={media.downloads}
        />

      </section>

    </article>
  );
};

export default MediaDetail;