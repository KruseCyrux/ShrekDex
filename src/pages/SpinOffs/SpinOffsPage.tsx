import spinOffs from '../../data/spinOffs.json';

import { teraboxNotice }
  from '../../data/siteConfig';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import DownloadNotice
  from '../../components/DownloadNotice/DownloadNotice';

import './SpinOffsPage.scss';

const SpinOffsPage = () => {
  return (
    <section className="spin-offs-page">

      <div className="page-heading">

        <span>
          SHREKDEX
        </span>

        <h1>
          Spin-Offs
        </h1>

        <p>
          Películas y producciones derivadas
          que expanden el universo de Shrek.
        </p>

      </div>

      <DownloadNotice
        title={teraboxNotice.title}
        message={teraboxNotice.message}
        link={teraboxNotice.link}
        linkLabel={teraboxNotice.linkLabel}
      />

      <div className="spin-offs-grid">

        {spinOffs.map((spinOff) => (

          <MediaCard
            key={spinOff.id}
            id={spinOff.id}
            category="spin-offs"
            title={spinOff.title}
            year={spinOff.year}
            cover={spinOff.cover}
            description={spinOff.description}
            type={spinOff.type}
          />

        ))}

      </div>

    </section>
  );
};

export default SpinOffsPage;