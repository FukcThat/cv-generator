export default function EducationSection({ educationalInfo = [] }) {
  return (
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
            {educationEntry.description && <p>{educationEntry.description}</p>}
          </div>
        ))
      ) : (
        <p>No education added.</p>
      )}
    </section>
  );
}
