export default function EducationSection({ educationalInfo = [] }) {
  return (
    <section className="resume-section">
      <h2>Education</h2>
      {educationalInfo.length > 0 ? (
        educationalInfo.map((educationEntry) => (
          <div key={educationEntry.id} className="resume-entry">
            <h4>{educationEntry.schoolName}</h4>
            <p className="start-end-dates">
              {educationEntry.startDate} - {educationEntry.endDate}
            </p>
            <p className="degree">{educationEntry.degree}</p>
            {educationEntry.description && (
              <p className="edu-description">{educationEntry.description}</p>
            )}
          </div>
        ))
      ) : (
        <p>No education added.</p>
      )}
    </section>
  );
}
