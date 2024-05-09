import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PracticalEntryDisplay from './PracticalEntryDisplay';
import PracticalEntryForm from './PracticalEntryForm';
import '../styles/Practical.css';

export default function Practical() {
  const [display, setDisplay] = useState(false);
  const [practicalList, setPracticalList] = useState([
    {
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: [],
      id: uuidv4(),
    },
  ]);
  const [responsibilityList, setResponsibilityList] = useState({});

  function toggleDisplay() {
    setDisplay(!display);
  }

  function deleteEntry(id) {
    let entryObj = practicalList.find((entry) => entry.id === id);
    let respIdList = entryObj.responsibilities;
    let newRespList = {};
    for (const idProp in responsibilityList) {
      if (!respIdList.includes(idProp))
        newRespList[idProp] = responsibilityList[idProp];
    }
    setResponsibilityList(newRespList);
    setPracticalList(practicalList.filter((entry) => entry.id !== id));
  }

  function addEntry() {
    setPracticalList(
      practicalList.concat({
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        responsibilities: [],
        id: uuidv4(),
      }),
    );
  }

  function getNewEntry(entry, newValue, fieldName) {
    let newEntry = {};
    switch (fieldName) {
      case 'companyName':
        newEntry = { ...entry, companyName: newValue };
        break;
      case 'position':
        newEntry = { ...entry, position: newValue };
        break;
      case 'startDate':
        newEntry = { ...entry, startDate: newValue };
        break;
      case 'endDate':
        newEntry = { ...entry, endDate: newValue };
        break;
    }
    return newEntry;
  }

  function updateEntry(id, newValue, fieldName) {
    const oldEntry = practicalList.find((entry) => entry.id === id);
    const newEntry = getNewEntry(oldEntry, newValue, fieldName);
    setPracticalList(
      practicalList.map((entry) => {
        if (entry === oldEntry) return newEntry;
        return entry;
      }),
    );
  }

  function deleteResponsibility(parentId, id) {
    let newRespList = { ...responsibilityList };
    delete newRespList[id];
    setResponsibilityList(newRespList);

    let oldEntry = practicalList.find((entry) => entry.id === parentId);
    let newRespIdList = oldEntry.responsibilities.filter(
      (respId) => respId !== id,
    );
    let newEntry = { ...oldEntry, responsibilities: newRespIdList };
    setPracticalList(
      practicalList.map((entry) => {
        if (entry === oldEntry) return newEntry;
        return entry;
      }),
    );
  }

  function addResponsibility(parentId) {
    let newRespList = { ...responsibilityList };
    let newRespId = uuidv4();
    newRespList[newRespId] = '';
    setResponsibilityList(newRespList);

    let oldEntry = practicalList.find((entry) => entry.id === parentId);
    let newRespIdList = oldEntry.responsibilities.concat(newRespId);
    let newEntry = { ...oldEntry, responsibilities: newRespIdList };
    setPracticalList(
      practicalList.map((entry) => {
        if (entry === oldEntry) return newEntry;
        return entry;
      }),
    );
  }

  function updateResponsibility(id, newValue) {
    let newRespList = {};
    for (const idProp in responsibilityList) {
      if (idProp === id) newRespList[idProp] = newValue;
      else newRespList[idProp] = responsibilityList[idProp];
    }
    setResponsibilityList(newRespList);
  }

  return (
    <div className="practical container">
      {display ? (
        <div className="practical display">
          <div className="title-container">
            <h2 className="title">Practical Experience</h2>
            <button className="edit-bttn" onClick={toggleDisplay}>
              Edit
            </button>
          </div>
          {practicalList.map((entry) => {
            let respList = entry.responsibilities.map(
              (respId) => responsibilityList[respId],
            );
            return (
              <PracticalEntryDisplay
                key={entry.id}
                entry={entry}
                respList={respList}
              />
            );
          })}
        </div>
      ) : (
        <div className="practical form-display">
          <h2 className="title">Practical Experience</h2>
          {practicalList.map((entry) => {
            let respList = entry.responsibilities.map(
              (respId) => responsibilityList[respId],
            );
            return (
              <PracticalEntryForm
                key={entry.id}
                entry={entry}
                respList={respList}
                updateEntry={updateEntry}
                updateResp={updateResponsibility}
                addResp={addResponsibility}
                delResp={deleteResponsibility}
                delEntry={deleteEntry}
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
