import { useState } from "react";
import EducationInfoForm from "./education/EducationInfoForm";
import ExperienceInfoForm from "./experience/ExperienceInfoForm";
import CollapsibleSection from "./general/CollapsibleSection";
import PersonalInfoForm from "./personal-info/PersonalInfoForm";

export default function Sidebar({
  personalInfo,
  setPersonalInfo,
  educationalInfo,
  setEducationalInfo,
  experienceInfo,
  setExperienceInfo,
}) {
  const [editEducation, setEditEducation] = useState(null);
  const [editExperience, setEditExperience] = useState(null);

  const addNewEducation = () =>
    setEditEducation({
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  const addNewExperience = () =>
    setEditExperience({
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      description: "",
      startDate: "",
      endDate: "",
    });

  const handleEditSubmit = (
    entry,
    state,
    setState,
    editEntry,
    setEditEntry
  ) => {
    if (editEntry?.index !== undefined) {
      setState(
        state.map((item, index) => (index === editEntry.index ? entry : item))
      );
    } else {
      setState([...state, entry]);
    }
    setEditEntry(null);
  };

  const handleEducationSubmit = (entry) => {
    handleEditSubmit(
      entry,
      educationalInfo,
      setEducationalInfo,
      editEducation,
      setEditEducation
    );
  };

  const handleExperienceSubmit = (entry) => {
    handleEditSubmit(
      entry,
      experienceInfo,
      setExperienceInfo,
      editExperience,
      setEditExperience
    );
  };

  const handleDeleteEducation = (deleteIndex) => {
    setEducationalInfo([
      educationalInfo.filter((entry, index) => index !== deleteIndex),
    ]);
  };

  const handleDeleteExperience = (deleteIndex) => {
    setExperienceInfo([
      experienceInfo.filter((entry, index) => index !== deleteIndex),
    ]);
  };

  return (
    <div className="sidebar">
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <CollapsibleSection sectionTitle="Education">
        {educationalInfo.map((entry, index) => (
          <button
            key={index}
            className="entry-btn"
            onClick={() => setEditEducation({ ...entry, index })}
          >
            {entry.schoolName || "Unnamed Education"}
          </button>
        ))}
        <button className="add-section-btn" onClick={addNewEducation}>
          + Education
        </button>

        {editEducation && (
          <EducationInfoForm
            educationalInfo={editEducation}
            setEducationalInfo={handleEducationSubmit}
            onCancel={() => setEditEducation(null)}
            onDelete={() => handleDeleteEducation(editEducation.index)}
          />
        )}
      </CollapsibleSection>

      <CollapsibleSection sectionTitle="Experience">
        {experienceInfo.map((entry, index) => (
          <button
            key={index}
            className="entry-btn"
            onClick={() => setEditExperience({ ...entry, index })}
          >
            {" "}
            {entry.companyName || "Unnamed Eperience"}
          </button>
        ))}
        <button className="add-section-btn" onClick={addNewExperience}>
          + Experience
        </button>

        {editExperience && (
          <ExperienceInfoForm
            experienceInfo={editExperience}
            setExperienceInfo={handleExperienceSubmit}
            onCancel={() => setEditExperience(null)}
            onDelete={() => handleDeleteExperience(editExperience.index)}
          />
        )}
      </CollapsibleSection>
      {/* 
      <CollapsibleSection sectionTitle={"Experience"}>
        <ExperienceInfoForm
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
      </CollapsibleSection>

      <CollapsibleSection sectionTitle={"Education"}>
        <EducationInfoForm
          educationalInfo={educationalInfo}
          setEducationalInfo={setEducationalInfo}
        />
      </CollapsibleSection> */}
    </div>
  );
}
