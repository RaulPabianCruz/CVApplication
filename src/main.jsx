import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactInfo from './components/ContactInfo';
import Summary from './components/Summary';
import Education from './components/Education';
import Practical from './components/Practical';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactInfo />
    <Summary />
    <Education />
    <Practical />
  </React.StrictMode>,
);
