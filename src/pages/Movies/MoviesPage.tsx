import movies from '../../data/movies.json';

import MediaCard from '../../components/MediaCard/MediaCard';

import './MoviesPage.scss';

import DownloadNotice
  from '../../components/DownloadNotice/DownloadNotice';
import { teraboxNotice } from '../../data/siteConfig';

const MoviesPage = () => {
  return (
    <section className="movies-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Películas
        </h1>

        <p>
          Todas las películas que forman parte
          del universo cinematográfico de Shrek.
        </p>

      </div>

      <DownloadNotice
        title={teraboxNotice.title}
        message={teraboxNotice.message}
        link={teraboxNotice.link}
        linkLabel={teraboxNotice.linkLabel}
      />

      <div className="movies-grid">

        {movies.map((movie) => (

          <MediaCard
            key={movie.id}
            id={movie.id}
            category="movies"
            title={movie.title}
            year={movie.year}
            cover={movie.cover}
            description={movie.description}
            type={movie.type}
          />

        ))}

      </div>

    </section>
  );
};

export default MoviesPage;