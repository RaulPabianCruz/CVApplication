import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationEntry from './EducationEntry';
import EducationEntryForm from './EducationEntryForm';

export default function Education() {
  const [display, setDisplay] = useState(false);
  const [educationList, setEducationList] = useState([
    {
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
      id: uuidv4(),
    },
  ]);

  function toggleDisplay() {
    setDisplay(!display);
  }

  function deleteEntry(id) {
    setEducationList(educationList.filter((entry) => entry.id !== id));
  }

  function addEntry() {
    setEducationList(
      educationList.concat({
        schoolName: '',
        titleOfStudy: '',
        startDate: '',
        endDate: '',
        id: uuidv4(),
      }),
    );
  }

  function getNewEntry(entry, newValue, fieldName) {
    let newEntry = {};
    switch (fieldName) {
      case 'schoolName':
        newEntry = { ...entry, schoolName: newValue };
        break;
      case 'titleOfStudy':
        newEntry = { ...entry, titleOfStudy: newValue };
        break;
      case 'startDate':
        newEntry = { ...entry, startDate: newValue };
        break;
      case 'endDate':
        newEntry = { ...entry, endDate: newValue };
    }
    return newEntry;
  }

  function updateEntry(id, newValue, fieldName) {
    const oldEntry = educationList.find((entry) => entry.id === id);
    const newEntry = getNewEntry(oldEntry, newValue, fieldName);
    setEducationList(
      educationList.map((entry) => {
        if (entry === oldEntry) return newEntry;
        return entry;
      }),
    );
  }

  return (
    <div className="education container">
      {display ? (
        <div className="education display">
          <div className="title-container">
            <h2 className="title">Education</h2>
            <button onClick={toggleDisplay} className="edit-bttn">
              Edit
            </button>
          </div>
          {educationList.map((entry) => {
            return <EducationEntry key={entry.id} eduEntry={entry} />;
          })}
        </div>
      ) : (
        <div className="education form-display">
          <h2 className="title">Education</h2>
          {educationList.map((entry) => {
            return (
              <EducationEntryForm
                key={entry.id}
                eduEntry={entry}
                onUpdate={updateEntry}
                onDelete={deleteEntry}
              />
            );
          })}
          <div className="bttn-container">
            <button className="add-bttn" onClick={addEntry}>
              +
            </button>
            <button className="submit-bttn" onClick={toggleDisplay}>
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
