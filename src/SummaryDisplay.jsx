export default function SummaryDisplay({ summary, onEdit }) {
  return (
    <div className="summary display">
      <div className="title container">
        <h2 className="title">Profile</h2>
        <button className="edit-bttn" onClick={onEdit}>
          Edit
        </button>
      </div>
      <p className="text">{summary}</p>
    </div>
  );
}
