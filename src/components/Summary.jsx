import { useState } from 'react';
import SummaryDisplay from './SummaryDisplay';
import SummaryForm from './SummaryForm';
import '../styles/Summary.css';

export default function Summary() {
  const [summary, setSummary] = useState('');
  const [display, toggleDisplay] = useState(false);

  function updateText(e) {
    setSummary(e.target.value);
  }

  function toggle() {
    toggleDisplay(!display);
  }
  return (
    <div className="summary container">
      {display ? (
        <SummaryDisplay summary={summary} onEdit={toggle} />
      ) : (
        <SummaryForm
          summary={summary}
          updateText={updateText}
          onSubmit={toggle}
        />
      )}
    </div>
  );
}
