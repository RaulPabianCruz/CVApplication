export default function ContactInfoForm({
  contactInfo,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onSubmit,
}) {
  return (
    <form>
      <input type="text" value={contactInfo.name} onChange={onNameChange} />
      <input type="text" value={contactInfo.email} onChange={onEmailChange} />
      <input type="text" value={contactInfo.phone} onChange={onPhoneChange} />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
