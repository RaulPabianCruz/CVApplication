export default function ContactInfoForm({
  contactInfo,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onSubmit,
}) {
  return (
    <div className="contact form-container">
      <h2 className="title">Contact Info</h2>
      <form className="contact form">
        <label className="label name">
          Name:
          <input
            type="text"
            value={contactInfo.name}
            onChange={onNameChange}
            className="input name"
          />
        </label>
        <label className="label email">
          Email:
          <input
            type="email"
            value={contactInfo.email}
            onChange={onEmailChange}
            className="input email"
          />
        </label>
        <label className="label phone">
          Phone:
          <input
            type="tel"
            value={contactInfo.phone}
            onChange={onPhoneChange}
            className="input phone"
          />
        </label>
        <button className="submit-bttn" type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
