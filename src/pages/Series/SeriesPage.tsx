import series from '../../data/series.json';

import { teraboxNotice }
  from '../../data/siteConfig';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import DownloadNotice
  from '../../components/DownloadNotice/DownloadNotice';

import './SeriesPage.scss';

const SeriesPage = () => {
  return (
    <section className="series-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Series
        </h1>

        <p>
          Series animadas ambientadas
          dentro del universo de Shrek
          y sus personajes derivados.
        </p>

      </div>

      <DownloadNotice
        title={teraboxNotice.title}
        message={teraboxNotice.message}
        link={teraboxNotice.link}
        linkLabel={teraboxNotice.linkLabel}
      />

      <div className="series-grid">

        {series.map((item) => (

          <MediaCard
            key={item.id}
            id={item.id}
            category="series"
            title={item.title}
            year={item.year}
            cover={item.cover}
            description={item.description}
            type={item.type}
          />

        ))}

      </div>

    </section>
  );
};

export default SeriesPage;