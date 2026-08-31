import spinOffShorts
  from '../../data/spinOffShorts.json';

import { teraboxNotice }
  from '../../data/siteConfig';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import DownloadNotice
  from '../../components/DownloadNotice/DownloadNotice';

import './SpinOffShortsPage.scss';

const SpinOffShortsPage = () => {
  return (
    <section className="spin-off-shorts-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Cortos Spin-Offs
        </h1>

        <p>
          Cortometrajes derivados de los
          personajes y producciones
          spin-off del universo de Shrek.
        </p>

      </div>

      <DownloadNotice
        title={teraboxNotice.title}
        message={teraboxNotice.message}
        link={teraboxNotice.link}
        linkLabel={teraboxNotice.linkLabel}
      />

      <div className="spin-off-shorts-grid">

        {spinOffShorts.map((short) => (

          <MediaCard
            key={short.id}
            id={short.id}
            category="spin-off-shorts"
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

export default SpinOffShortsPage;