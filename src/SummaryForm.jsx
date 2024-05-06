export default function SummaryForm({ summary, updateText, onSubmit }) {
  return (
    <div className="summary form">
      <h2 className="title">Summary/Profile</h2>
      <label className="label">
        Summary:
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          className="textarea"
          value={summary}
          onChange={updateText}
        ></textarea>
      </label>
      <button className="submit-bttn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
