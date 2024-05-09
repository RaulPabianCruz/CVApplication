export default function PracticalEntryForm({
  entry,
  respList,
  updateEntry,
  updateResp,
  addResp,
  delResp,
  delEntry,
}) {
  return (
    <div className="practical entry-form">
      <div className="practical input container">
        <label className="label company-name">
          Company Name:
          <input
            type="text"
            className="company-name"
            value={entry.companyName}
            onChange={(e) =>
              updateEntry(entry.id, e.target.value, 'companyName')
            }
          />
        </label>
        <label className="label position">
          Position:
          <input
            type="text"
            className="position"
            value={entry.position}
            onChange={(e) => updateEntry(entry.id, e.target.value, 'position')}
          />
        </label>
        <label className="label start-date">
          Start Date:
          <input
            type="date"
            className="start-date"
            value={entry.startDate}
            onChange={(e) => updateEntry(entry.id, e.target.value, 'startDate')}
          />
        </label>
        <label className="label end-date">
          End Date:
          <input
            type="date"
            className="end-date"
            value={entry.endDate}
            onChange={(e) => updateEntry(entry.id, e.target.value, 'endDate')}
          />
        </label>
      </div>
      <h4 className="responsibility title">Responsibilities: </h4>
      <ul className="responsibility-form list-container">
        {respList.map((resp, index) => {
          let respId = entry.responsibilities[index];
          return (
            <li className="responsibility list-item" key={respId}>
              <input
                type="text"
                className="responsibility desc"
                value={resp}
                onChange={(e) => updateResp(respId, e.target.value)}
              />
              <button
                className="del-bttn"
                onClick={() => delResp(entry.id, respId)}
              >
                X
              </button>
            </li>
          );
        })}
        <button
          className="add-bttn responsibility"
          type="button"
          onClick={() => addResp(entry.id)}
        >
          +
        </button>
      </ul>
      <button
        className="del-bttn"
        type="button"
        onClick={() => delEntry(entry.id)}
      >
        delete
      </button>
    </div>
  );
}
