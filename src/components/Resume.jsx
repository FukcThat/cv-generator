import PersonalInfoSection from "./personal-info/PersonalInfoSection";

export default function Resume({
  personalInfo,
  languageInfo,
  educationalInfo,
  experienceInfo,
}) {
  return (
    <div className="resume-page flex-col">
      <div className="resume-layout">
        <section className="resume-contact">
          <PersonalInfoSection personalInfo={personalInfo} />
        </section>

        <section className="resume-language">
          <h2>Languages</h2>
          {languageInfo.length > 0 ? (
            languageInfo.map((languageEntry) => (
              <div key={languageEntry.id} className="resume-entry">
                <h4>{languageEntry.languageName}</h4>
                <p>{languageEntry.languageLevel}</p>
                <p>{languageEntry.languageCertification}</p>
              </div>
            ))
          ) : (
            <p>No languages added.</p>
          )}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {educationalInfo.length > 0 ? (
            educationalInfo.map((educationEntry) => (
              <div key={educationEntry.id} className="resume-entry">
                <h4>{educationEntry.schoolName}</h4>
                <p>{educationEntry.degree}</p>
                <p>
                  {educationEntry.startDate} - {educationEntry.endDate}
                </p>
                {educationEntry.description && (
                  <p>{educationEntry.description}</p>
                )}
              </div>
            ))
          ) : (
            <p>No education added.</p>
          )}
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {experienceInfo.length > 0 ? (
            experienceInfo.map((experienceEntry) => (
              <div key={experienceEntry.id} className="resume-entry">
                <h4>
                  {experienceEntry.jobTitle} at {experienceEntry.companyName}
                </h4>
                <p>{experienceEntry.companyLocation}</p>
                <p>
                  {experienceEntry.startDate} - {experienceEntry.endDate}
                </p>
                {experienceEntry.description && (
                  <p>{experienceEntry.description}</p>
                )}
              </div>
            ))
          ) : (
            <p>No work experience added.</p>
          )}
        </section>
      </div>
    </div>
  );
}
