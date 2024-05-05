export default function ContactInfoForm({
  contactInfo,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onSubmit,
}) {
  return (
    <form className="contact form">
      <label className="label">
        Name:
        <input
          type="text"
          value={contactInfo.name}
          onChange={onNameChange}
          className="input name"
        />
      </label>
      <label className="label">
        Email:
        <input
          type="email"
          value={contactInfo.email}
          onChange={onEmailChange}
          className="input email"
        />
      </label>
      <label className="label">
        Phone:
        <input
          type="tel"
          value={contactInfo.phone}
          onChange={onPhoneChange}
          className="input phone"
        />
      </label>
      <button className="submit-bttn" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
