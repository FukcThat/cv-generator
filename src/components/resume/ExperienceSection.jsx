export default function ExperienceSection({ experienceInfo = [] }) {
  return (
    <section className="resume-section">
      <h2>Experience</h2>
      {experienceInfo.length > 0 ? (
        experienceInfo.map((experienceEntry) => (
          <div key={experienceEntry.id} className="resume-entry">
            <h4>
              {experienceEntry.jobTitle} at {experienceEntry.companyName}
            </h4>
            <p className="start-end-dates">
              {experienceEntry.startDate} - {experienceEntry.endDate}
            </p>
            <p className="company-name">{experienceEntry.companyLocation}</p>
            {experienceEntry.description && (
              <p className="work-description">{experienceEntry.description}</p>
            )}
          </div>
        ))
      ) : (
        <p>No work experience added.</p>
      )}
    </section>
  );
}
