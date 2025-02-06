import PersonalInfoForm from "./components/personal-info/PersonalInfoForm";

export default function Sidebar({ personalInfo, setPersonalInfo }) {
  return (
    <div className="sidebar">
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </div>
  );
}
