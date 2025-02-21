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
  );
}
