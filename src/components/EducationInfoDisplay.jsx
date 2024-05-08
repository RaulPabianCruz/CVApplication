export default function EducationInfoDisplay({ onEdit, children }) {
  return (
    <div className="education display">
      <div className="title-container">
        <h2 className="title">Education</h2>
        <button onClick={onEdit} className="edit-bttn">
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}
