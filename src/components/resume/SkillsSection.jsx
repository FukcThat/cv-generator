export default function SkillsSection({ skillsInfo = [] }) {
  return (
    <section className="resume-skills">
      <h2>Skills</h2>
      {skillsInfo.length > 0 ? (
        skillsInfo.map((skillEntry) => (
          <div key={skillEntry.id} className="resume-entry">
            <h4>{skillEntry.skillName}</h4>
          </div>
        ))
      ) : (
        <p>No skills added.</p>
      )}
    </section>
  );
}
