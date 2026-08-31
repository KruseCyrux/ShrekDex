import extras from '../../data/extras.json';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import './ExtrasPage.scss';

const ExtrasPage = () => {
  return (
    <section className="extras-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Extras
        </h1>

        <p>
          Material adicional relacionado
          con la franquicia de Shrek,
          incluyendo documentales,
          detrás de cámaras, featurettes
          y contenido promocional.
        </p>

      </div>

      <div className="extras-grid">

        {extras.map((extra) => (

          <MediaCard
            key={extra.id}
            id={extra.id}
            category="extras"
            title={extra.title}
            year={extra.year}
            cover={extra.cover}
            description={extra.description}
            type={extra.type}
          />

        ))}

      </div>

    </section>
  );
};

export default ExtrasPage;