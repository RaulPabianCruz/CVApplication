export default function EducationFormDisplay({ onAdd, onSubmit, children }) {
  return (
    <div className="education form-display">
      <h2 className="title">Education</h2>
      {children}
      <div className="bttn-container">
        <button className="add-bttn" onClick={onAdd}>
          +
        </button>
        <button className="submit-bttn" onClick={onSubmit}>
          submit
        </button>
      </div>
    </div>
  );
}
