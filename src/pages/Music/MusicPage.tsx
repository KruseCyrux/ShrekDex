import music from '../../data/music.json';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import './MusicPage.scss';

const MusicPage = () => {
  return (
    <section className="music-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Música
        </h1>

        <p>
          Bandas sonoras, álbumes,
          recopilaciones y material musical
          relacionado con la franquicia Shrek.
        </p>

      </div>

      <div className="music-grid">

        {music.map((album) => (

          <MediaCard
            key={album.id}
            id={album.id}
            category="music"
            title={album.title}
            year={album.year}
            cover={album.cover}
            description={album.description}
            type={album.type}
          />

        ))}

      </div>

    </section>
  );
};

export default MusicPage;