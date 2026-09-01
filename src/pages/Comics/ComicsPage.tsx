import comics from '../../data/comics.json';

import MediaCard from '../../components/MediaCard/MediaCard';

import './ComicsPage.scss';

const ComicsPage = () => {
  return (
    <section className="comics-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Cómics
        </h1>

        <p>
          Recopilación de cómics, historietas,
          adaptaciones impresas y material gráfico
          relacionado con el universo de Shrek.
        </p>

      </div>

      <div className="comics-grid">

        {comics.map((comic) => (

          <MediaCard
            key={comic.id}
            id={comic.id}
            category="comics"
            title={comic.title}
            year={comic.year}
            cover={comic.cover}
            description={comic.description}
            type={comic.type}
          />

        ))}

      </div>

    </section>
  );
};

export default ComicsPage;