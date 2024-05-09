export default function SummaryForm({ summary, updateText, onSubmit }) {
  return (
    <form className="summary form">
      <h2 className="title">Summary/Profile</h2>
      <label className="label">
        Write a brief summary of yourself:
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
      <button className="submit-bttn" type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
