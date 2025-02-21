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

  return (
    <div
      className="resume-layout"
      style={{ display: "grid", gridTemplateColums: layout.gridTemplateColums }}
    >
      {/* Personal Info Left*/}
      {layout.sections.left && (
        <div className="resume-column">
          {layout.sections.left.includes("personal") && (
            <PersonalInfoSection personalInfo={personalInfo} />
          )}
          {layout.sections.left.includes("skills") && (
            <SkillsSection skillsInfo={skillsInfo} />
          )}
          {layout.sections.left.includes("languages") && (
            <LanguageSection languageInfo={languageInfo} />
          )}

          {layout.sections.right && (
            <div className="resume-column">
              {layout.sections.right.includes("experience") && (
                <ExperienceSection experienceInfo={experienceInfo} />
              )}
              {layout.sections.right.includes("education") && (
                <EducationSection educationalInfo={educationalInfo} />
              )}
            </div>
          )}

          {/* Personal Info Top*/}
          {layout.sections.length &&
            layout.sections.map((section) => (
              <div key={section} className="resume-section">
                {section === "personal" && (
                  <PersonalInfoSection personalInfo={personalInfo} />
                )}
                {section === "skills" && (
                  <SkillsSection skillsInfo={skillsInfo} />
                )}
                {section === "languages" && (
                  <LanguageSection languageInfo={languageInfo} />
                )}
                {section === "experience" && (
                  <ExperienceSection experienceInfo={experienceInfo} />
                )}
                {section === "education" && (
                  <EducationSection educationalInfo={educationalInfo} />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
