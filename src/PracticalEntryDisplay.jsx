export default function PracticalEntryDisplay({ entry, respList }) {
  return (
    <div className="practical entry-display">
      <h3 className="title">
        {entry.companyName}, {entry.position}
      </h3>
      <p className="dates">{`(${entry.startDate})-(${entry.endDate})`}</p>
      <h4 className="responsibility title">Responsibilities: </h4>
      <div className="responsibility list-container">
        <ul className="list">
          {respList.map((resp, index) => {
            return (
              <li key={entry.responsibilities[index]} className="list-item">
                {resp}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
