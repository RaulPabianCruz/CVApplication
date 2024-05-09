export default function EducationEntry({ eduEntry }) {
  return (
    <div className="education info-container">
      <h3 className="title">
        {eduEntry.schoolName}, {eduEntry.titleOfStudy}
      </h3>
      <p className="dates">
        {`(${eduEntry.startDate}) - (${eduEntry.endDate})`}
      </p>
    </div>
  );
}
