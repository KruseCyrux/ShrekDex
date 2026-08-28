import './DetailsTable.scss';

interface DetailsTableProps {
  details: Record<string, string>;
}

const DetailsTable = ({
  details,
}: DetailsTableProps) => {
  return (
    <div className="details-table">

      {Object.entries(details).map(
        ([label, value]) => (

          <div
            className="details-row"
            key={label}
          >

            <span className="details-label">
              {label}
            </span>

            <span className="details-value">
              {value}
            </span>

          </div>

        )
      )}

    </div>
  );
};

export default DetailsTable;