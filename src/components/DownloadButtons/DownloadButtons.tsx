import { Download } from 'lucide-react';

import './DownloadButtons.scss';

interface Download {
  label: string;
  url: string;
}

interface DownloadButtonsProps {
  downloads: Download[];
}

const DownloadButtons = ({
  downloads,
}: DownloadButtonsProps) => {
  return (
    <div className="downloads">

      {downloads.map((download) => (

        <a
          key={download.label}
          href={download.url}
          className="download-button"
        >

          <Download size={18} />

          <span>
            {download.label}
          </span>

        </a>

      ))}

    </div>
  );
};

export default DownloadButtons;