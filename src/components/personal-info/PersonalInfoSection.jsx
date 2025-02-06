export default function PersonalInfoSection({
  fullName,
  address,
  phoneNumber,
  email,
  birthdate,
}) {
  return (
    <div className="personal-info--section">
      <h1 className="resume-name">{fullName}</h1>
      <div className="resume-contact">
        {address && (
          <div>
            <i className="" />
            <span>{address}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <i className="" />
            <span>{phoneNumber}</span>
          </div>
        )}

        {email && (
          <div>
            <i className="" />
            <span>{email}</span>
          </div>
        )}

        {birthdate && (
          <div>
            <i className="" />
            <span>{birthdate}</span>
          </div>
        )}
      </div>
    </div>
  );
}
