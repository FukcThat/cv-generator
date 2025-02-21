export default function PersonalInfoSection({ personalInfo }) {
  return (
    <div className="personal-info--section flex-col">
      <h1 className="resume-name">{personalInfo.fullName}</h1>
      <div className="resume-contact flex-col">
        {personalInfo.address && (
          <div>
            <i className="" />
            <span>{personalInfo.address}</span>
          </div>
        )}
        {personalInfo.phoneNumber && (
          <div>
            <i className="" />
            <span>{personalInfo.phoneNumber}</span>
          </div>
        )}
        {personalInfo.email && (
          <div>
            <i className="" />
            <span>{personalInfo.email}</span>
          </div>
        )}
        {personalInfo.birthdate && (
          <div>
            <i className="" />
            <span>{personalInfo.birthdate.toDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
