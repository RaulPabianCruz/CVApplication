import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactInfo from './ContactInfo';
import Summary from './Summary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactInfo />
    <Summary />
  </React.StrictMode>,
);
