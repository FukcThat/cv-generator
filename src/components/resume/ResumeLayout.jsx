import { layouts } from "./Layouts";
import PersonalInfoSection from "./PersonalInfoSection";
import SkillsSection from "./SkillsSection";
import LanguageSection from "./LanguageSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

export default function ResumeLayout({
  personalInfo = {},
  skillsInfo = [],
  languageInfo = [],
  educationalInfo = [],
  experienceInfo = [],
  selectedLayout,
}) {
  const layout = layouts[selectedLayout] || layouts["personalLeft"];

  console.log("Resume layout: educational info - ", educationalInfo);
  return (
    <div
      className="resume-layout"
      style={{
        display: "grid",
        gridTemplateColumns: layout.gridTemplateColumns,
        gap: "1rem",
        alignItems: "start",
      }}
    >
      {layout.sections.full ? (
        <div className="resume-column">
          {layout.sections.full.includes("personal") && (
            <PersonalInfoSection personalInfo={personalInfo} />
          )}
          {layout.sections.full.includes("skills") && (
            <SkillsSection skillsInfo={skillsInfo} />
          )}
          {layout.sections.full.includes("languages") && (
            <LanguageSection languageInfo={languageInfo} />
          )}
          {layout.sections.full.includes("experience") && (
            <ExperienceSection experienceInfo={experienceInfo} />
          )}
          {layout.sections.full.includes("education") && (
            <EducationSection educationalInfo={educationalInfo} />
          )}
        </div>
      ) : (
        Object.entries(layout.sections).map(([columnKey, sections]) => (
          <div key={columnKey} className="resume-column">
            {sections.includes("personal") && (
              <PersonalInfoSection personalInfo={personalInfo} />
            )}
            {sections.includes("skills") && (
              <SkillsSection skillsInfo={skillsInfo} />
            )}
            {sections.includes("languages") && (
              <LanguageSection languageInfo={languageInfo} />
            )}
            {sections.includes("experience") && (
              <ExperienceSection experienceInfo={experienceInfo} />
            )}
            {sections.includes("education") && (
              <EducationSection educationalInfo={educationalInfo} />
            )}
          </div>
        ))
      )}
    </div>
  );
}
