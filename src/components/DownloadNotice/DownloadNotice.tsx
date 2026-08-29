import { ExternalLink } from 'lucide-react';

import './DownloadNotice.scss';

interface DownloadNoticeProps {
  title: string;
  message: string;
  link?: string;
  linkLabel?: string;
}

const DownloadNotice = ({
  title,
  message,
  link,
  linkLabel,
}: DownloadNoticeProps) => {
  return (
    <div className="download-notice">

      <h3>
        {title}
      </h3>

      <p>
        {message}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="download-notice-link"
        >
          <span>
            {linkLabel || 'Ver enlace'}
          </span>

          <ExternalLink size={18} />
        </a>
      )}

    </div>
  );
};

export default DownloadNotice;