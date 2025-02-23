import ResumeLayout from "./resume/ResumeLayout";

export default function Resume({
  personalInfo,
  skillsInfo,
  languageInfo,
  educationalInfo,
  experienceInfo,
  selectedLayout,
}) {
  return (
    <div className="resume-page flex-col">
      <ResumeLayout
        personalInfo={personalInfo}
        skillsInfo={skillsInfo}
        languageInfo={languageInfo}
        educationalInfo={educationalInfo}
        experienceInfo={experienceInfo}
        selectedLayout={selectedLayout}
      />
    </div>
  );
}
