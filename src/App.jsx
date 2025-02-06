import "./styles/App.css";
import Resume from "./components/Resume";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    birthdate: new Date(),
  });

  return (
    <>
      <div className="page-container flex-row">
        <Sidebar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <div className="resume-container">
          <Resume personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
