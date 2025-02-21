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
  const [selectedLayout, setSelectedLayout] = useState("personalLeft");

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

  const [languageInfo, setLanguageInfo] = useState(
    localStorage.getItem("languageInfo")
      ? JSON.parse(localStorage.getItem("languageInfo"))
      : []
  );

  const [skillsInfo, setSkillsInfo] = useState(
    localStorage.getItem("skillsInfo")
      ? JSON.parse(localStorage.getItem("skillsInfo"))
      : []
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
    localStorage.setItem("languageInfo", JSON.stringify(languageInfo));
  }, [languageInfo]);

  useEffect(() => {
    localStorage.setItem("skillsInfo", JSON.stringify(skillsInfo));
  }, [skillsInfo]);

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
          selectedLayout={selectedLayout}
          setSelectedLayout={setSelectedLayout}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          languageInfo={languageInfo}
          setLanguageInfo={setLanguageInfo}
          skillsInfo={skillsInfo}
          setSkillsInfo={setSkillsInfo}
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
        <div className="resume-container">
          <Resume
            selectedLayout={selectedLayout}
            personalInfo={personalInfo}
            skillsInfo={skillsInfo}
            languageInfo={languageInfo}
            educationalInfo={educationalInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
