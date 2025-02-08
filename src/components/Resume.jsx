import PersonalInfoForm from "./personal-info/PersonalInfoForm";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";

export default function Resume({ personalInfo }) {
  return (
    <div className="resume-page flex-col">
      <div className="resume-layout">
        <PersonalInfoSection personalInfo={personalInfo} />
      </div>
    </div>
  );
}
