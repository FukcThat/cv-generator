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
        gridTemplateColums: layout.gridTemplateColumns,
        gap: "1rem",
        alignItems: "start",
      }}
    >
      {Object.entries(layout.sections).map(([columnKey, sections]) => (
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
      ))}
    </div>
  );
}
