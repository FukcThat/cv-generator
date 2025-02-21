export default function LanguageSection({ languageInfo = [] }) {
  return (
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
  );
}
