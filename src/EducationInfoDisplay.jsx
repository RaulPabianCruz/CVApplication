export default function EducationInfoDisplay({ onEdit, children }) {
  return (
    <div className="education display">
      <h2 className="title">Education</h2>
      {children}
      <button onClick={onEdit} className="edit-bttn">
        Edit
      </button>
    </div>
  );
}
