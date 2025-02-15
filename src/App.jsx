import "./styles/App.css";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

const defaultData = {
  fullName: "Your Name",
  address: "Somestreet 3, 24680 Someplace, Somewhere",
  phoneNumber: "+99 1234 34567891",
  email: "someone@something.com",
  birthdate: new Date(),
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(
    localStorage.getItem("personalInfo")
      ? {
          ...JSON.parse(localStorage.getItem("personalInfo")),
          birthdate: new Date(
            JSON.parse(localStorage.getItem("personalInfo")).birthdate
          ),
        }
      : defaultData
  );

  const [educationalInfo, setEducationalInfo] = useState(
    localStorage.getItem("educationalInfo")
      ? JSON.parse(localStorage.getItem("educationalInfo"))
      : []
  );

  const [experienceInfo, setExperienceInfo] = useState(
    localStorage.getItem("experienceInfo")
      ? JSON.parse(localStorage.getItem("experienceInfo"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem("educationalInfo", JSON.stringify(educationalInfo));
  }, [educationalInfo]);

  useEffect(() => {
    localStorage.setItem("experienceInfo", JSON.stringify(experienceInfo));
  }, [experienceInfo]);

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
          <Resume
            personalInfo={personalInfo}
            educationalInfo={educationalInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
