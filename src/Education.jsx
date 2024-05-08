import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationInfoDisplay from './EducationInfoDisplay';
import EducationInfo from './EducationInfo';
import EducationFormDisplay from './EducationFormDisplay';
import EducationInfoForm from './EducationInfoForm';

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
        <EducationInfoDisplay onEdit={toggleDisplay}>
          {educationList.map((eduEntry) => {
            return <EducationInfo key={eduEntry.id} eduEntry={eduEntry} />;
          })}
        </EducationInfoDisplay>
      ) : (
        <EducationFormDisplay onAdd={addEntry} onSubmit={toggleDisplay}>
          {educationList.map((eduEntry) => {
            return (
              <EducationInfoForm
                key={eduEntry.id}
                eduEntry={eduEntry}
                onUpdate={updateEntry}
                onDelete={deleteEntry}
              />
            );
          })}
        </EducationFormDisplay>
      )}
    </div>
  );
}
