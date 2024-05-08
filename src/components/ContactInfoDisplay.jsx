export default function ContactInfoDisplay({ contactInfo, onEdit }) {
  return (
    <div className="contact display">
      <img src="" alt="" />
      <div className="info-container">
        <h1 className="name">{contactInfo.name}</h1>
        <p className="email">{contactInfo.email}</p>
        <p className="phone-num">{contactInfo.phone}</p>
      </div>
      <button onClick={onEdit} className="edit-bttn">
        Edit
      </button>
    </div>
  );
}
