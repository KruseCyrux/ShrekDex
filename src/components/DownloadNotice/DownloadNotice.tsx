import './DownloadNotice.scss';

interface DownloadNoticeProps {
  title: string;
  message: string;
}

const DownloadNotice = ({
  title,
  message,
}: DownloadNoticeProps) => {
  return (
    <div className="download-notice">

      <h3>
        {title}
      </h3>

      <p>
        {message}
      </p>

    </div>
  );
};

export default DownloadNotice;