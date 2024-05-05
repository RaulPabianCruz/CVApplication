import { useState } from 'react';
import ContactInfoDisplay from './ContactInfoDisplay';
import ContactInfoForm from './ContactInfoForm';

export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isDisplay, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay(!isDisplay);
  }

  function updateName(e) {
    setContactInfo({ ...contactInfo, name: e.target.value });
  }

  function updateEmail(e) {
    setContactInfo({ ...contactInfo, email: e.target.value });
  }

  function updatePhone(e) {
    setContactInfo({ ...contactInfo, phone: e.target.value });
  }

  return (
    <div>
      {isDisplay ? (
        <ContactInfoDisplay contactInfo={contactInfo} onEdit={toggleDisplay} />
      ) : (
        <ContactInfoForm
          contactInfo={contactInfo}
          onNameChange={updateName}
          onEmailChange={updateEmail}
          onPhoneChange={updatePhone}
          onSubmit={toggleDisplay}
        />
      )}
    </div>
  );
}
