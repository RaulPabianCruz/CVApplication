export default function ContactInfoDisplay({ contactInfo, onEdit }) {
  return (
    <div className="contact-info-display">
      <h1 className="header name">{contactInfo.name}</h1>
      <p className="email">{contactInfo.email}</p>
      <p className="phone-num">{contactInfo.phone}</p>
      <button onClick={onEdit} className="edit-bttn">
        Edit
      </button>
    </div>
  );
}
