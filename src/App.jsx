import "./styles/App.css";
import Resume from "./components/Resume";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Your Name",
    address: "Somestreet 3, 24680 Someplace, Somewhere",
    phoneNumber: "+99 1234 34567891",
    email: "someone@something.com",
    birthdate: new Date(),
  });

  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    degree: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    jobTitle: "",
    companyName: "",
    description: "",
    companyLocation: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  return (
    <>
      <div className="page-container flex-row">
        <Sidebar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
        <div className="resume-container">
          <Resume personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
