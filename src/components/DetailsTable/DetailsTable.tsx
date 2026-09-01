import './DetailsTable.scss';

interface Detail {
  label: string;
  value: string;
}

interface DetailsTableProps {
  details: Record<string, string> | Detail[];
}

const DetailsTable = ({
  details,
}: DetailsTableProps) => {

  const normalizedDetails: Detail[] = Array.isArray(details)
    ? details
    : Object.entries(details).map(
        ([label, value]) => ({
          label,
          value,
        })
      );

  return (
    <div className="details-table">

      {normalizedDetails.map(
        (detail, index) => (

          <div
            className="details-row"
            key={`${detail.label}-${index}`}
          >

            <span className="details-label">
              {detail.label}
            </span>

            <span className="details-value">
              {detail.value}
            </span>

          </div>

        )
      )}

    </div>
  );
};

export default DetailsTable;