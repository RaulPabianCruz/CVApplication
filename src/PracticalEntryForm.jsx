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
      <label className="label">
        Company Name:
        <input
          type="text"
          className="company-name"
          value={entry.companyName}
          onChange={(e) => updateEntry(entry.id, e.target.value, 'companyName')}
        />
      </label>
      <label className="label">
        Position:
        <input
          type="text"
          className="position"
          value={entry.position}
          onChange={(e) => updateEntry(entry.id, e.target.value, 'position')}
        />
      </label>
      <label className="label">
        Start Date:
        <input
          type="date"
          className="start-date"
          value={entry.startDate}
          onChange={(e) => updateEntry(entry.id, e.target.value, 'startDate')}
        />
      </label>
      <label className="label">
        End Date:
        <input
          type="date"
          className="end-date"
          value={entry.endDate}
          onChange={(e) => updateEntry(entry.id, e.target.value, 'endDate')}
        />
      </label>
      <h4 className="responsibility title">Responsibilities: </h4>
      <ul className="responsibility list-container">
        {respList.map((resp, index) => {
          let respId = entry.responsibilities[index];
          return (
            <li className="responsibility-container list-item" key={respId}>
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
          add responsibility
        </button>
      </ul>
      <button
        className="del-bttn"
        type="button"
        onClick={() => delEntry(entry.id)}
      >
        delete entry
      </button>
    </div>
  );
}
