import EducationInfoForm from "./components/education/EducationInfoForm";
import ExperienceInfoForm from "./components/experience/ExperienceInfoForm";
import PersonalInfoForm from "./components/personal-info/PersonalInfoForm";

export default function Sidebar({
  personalInfo,
  setPersonalInfo,
  educationalInfo,
  setEducationalInfo,
  experienceInfo,
  setExperienceInfo,
}) {
  return (
    <div className="sidebar">
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <ExperienceInfoForm
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <EducationInfoForm
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
      />
    </div>
  );
}
