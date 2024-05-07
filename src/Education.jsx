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
    setEducationList(educationList.filter((eduEntry) => eduEntry.id !== id));
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

  function updateEntryInfo(entryObj, newValue, fieldName) {
    switch (fieldName) {
      case 'schoolName':
        entryObj.schoolName = newValue;
        break;
      case 'titleOfStudy':
        entryObj.titleOfStudy = newValue;
        break;
      case 'startDate':
        entryObj.startDate = newValue;
        break;
      case 'endDate':
        entryObj.endDate = newValue;
    }
  }

  function updateEntry(id, newValue, fieldName) {
    const entryObj = educationList.find((eduEntry) => {
      if (eduEntry.id === id) return true;
    });
    updateEntryInfo(entryObj, newValue, fieldName);
    setEducationList(educationList.map((eduEntry) => eduEntry));
    console.log(educationList);
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
