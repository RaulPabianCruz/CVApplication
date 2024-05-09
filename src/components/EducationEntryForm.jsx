export default function EducationEntryForm({ eduEntry, onUpdate, onDelete }) {
  return (
    <form className="education form">
      <label className="label school-name">
        School Name:
        <input
          type="text"
          value={eduEntry.schoolName}
          className="input school-name"
          onChange={(e) => onUpdate(eduEntry.id, e.target.value, 'schoolName')}
        />
      </label>
      <label className="label study-title">
        Title of Study:
        <input
          type="text"
          value={eduEntry.titleOfStudy}
          className="input study-title"
          onChange={(e) =>
            onUpdate(eduEntry.id, e.target.value, 'titleOfStudy')
          }
        />
      </label>
      <label className="label start-date">
        Start Date:
        <input
          type="date"
          value={eduEntry.startDate}
          className="input start-date"
          onChange={(e) => onUpdate(eduEntry.id, e.target.value, 'startDate')}
        />
      </label>
      <label className="label end-date">
        End Date:
        <input
          type="date"
          value={eduEntry.endDate}
          className="input end-date"
          onChange={(e) => onUpdate(eduEntry.id, e.target.value, 'endDate')}
        />
      </label>
      <button
        className="del-bttn"
        type="button"
        onClick={() => onDelete(eduEntry.id)}
      >
        delete
      </button>
    </form>
  );
}
