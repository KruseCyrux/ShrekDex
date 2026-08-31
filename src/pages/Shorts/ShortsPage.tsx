import shorts from '../../data/shorts.json';

import { teraboxNotice }
  from '../../data/siteConfig';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import DownloadNotice
  from '../../components/DownloadNotice/DownloadNotice';

import './ShortsPage.scss';

const ShortsPage = () => {
  return (
    <section className="shorts-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Cortos
        </h1>

        <p>
          Cortometrajes y especiales que
          forman parte del universo de Shrek.
        </p>

      </div>

      <DownloadNotice
        title={teraboxNotice.title}
        message={teraboxNotice.message}
        link={teraboxNotice.link}
        linkLabel={teraboxNotice.linkLabel}
      />

      <div className="shorts-grid">

        {shorts.map((short) => (

          <MediaCard
            key={short.id}
            id={short.id}
            category="shorts"
            title={short.title}
            year={short.year}
            cover={short.cover}
            description={short.description}
            type={short.type}
          />

        ))}

      </div>

    </section>
  );
};

export default ShortsPage;