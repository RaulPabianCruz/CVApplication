export default function EducationInfoForm({ eduEntry, onUpdate, onDelete }) {
  return (
    <form className="education form">
      <label className="label">
        School Name:
        <input
          type="text"
          value={eduEntry.schoolName}
          className="school-name"
          onChange={(e) => onUpdate(eduEntry.id, e.target.value, 'schoolName')}
        />
      </label>
      <label className="label">
        Title of Study:
        <input
          type="text"
          value={eduEntry.titleOfStudy}
          className="study-title"
          onChange={(e) =>
            onUpdate(eduEntry.id, e.target.value, 'titleOfStudy')
          }
        />
      </label>
      <label className="label">
        Start Date:
        <input
          type="date"
          value={eduEntry.startDate}
          className="start-date"
          onChange={(e) => onUpdate(eduEntry.id, e.target.value, 'startDate')}
        />
      </label>
      <label className="label">
        End Date:
        <input
          type="date"
          value={eduEntry.endDate}
          className="end-date"
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
