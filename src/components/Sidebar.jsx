import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      id: uuidv4(),
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  const addNewExperience = () =>
    setEditExperience({
      id: uuidv4(),
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
    console.log("Saving Entry:", entry);

    const existingEntry = state.some((item) => item.id === editEntry?.id);

    if (existingEntry) {
      console.log("updating existing entry");
      setState((prev) =>
        prev.map((item) => (item.id === editEntry.id ? entry : item))
      );
    } else {
      console.log("Adding new entry");
      setState((prev) => [...prev, entry]);
    }
    setEditEntry(null);
  };

  const handleEducationSubmit = (entry) => {
    console.log("handleEducationSubmit triggered");
    console.log("Before update:", educationalInfo);
    handleEditSubmit(
      entry,
      educationalInfo,
      setEducationalInfo,
      editEducation,
      setEditEducation
    );
    console.log("After Update:", educationalInfo);
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

  const handleDeleteEducation = (id) => {
    setEducationalInfo((prev) => prev.filter((entry) => entry.id !== id));

    if (editEducation?.id === id) {
      setEditEducation(null);
    }
  };

  const handleDeleteExperience = (id) => {
    setExperienceInfo((prev) => prev.filter((entry) => entry?.id !== id));

    if (editExperience?.id === id) {
      setEditExperience(null);
    }
  };

  return (
    <div className="sidebar">
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <CollapsibleSection sectionTitle="Education">
        {educationalInfo.map((entry) => (
          <button
            key={entry.id}
            className="entry-btn"
            onClick={() => setEditEducation(entry)}
          >
            {entry.schoolName}
          </button>
        ))}
        <button className="add-section-btn" onClick={addNewEducation}>
          + Education
        </button>

        {editEducation && (
          <EducationInfoForm
            educationalInfo={editEducation}
            setEducationalInfo={(updatedEntry) => {
              handleEducationSubmit(updatedEntry);
            }}
            onCancel={() => setEditEducation(null)}
            onDelete={() => handleDeleteEducation(editEducation.id)}
          />
        )}
      </CollapsibleSection>

      <CollapsibleSection sectionTitle="Experience">
        {experienceInfo.map((entry) => (
          <button
            key={entry.id}
            className="entry-btn"
            onClick={() => setEditExperience(entry)}
          >
            {entry.companyName}
          </button>
        ))}
        <button className="add-section-btn" onClick={addNewExperience}>
          + Experience
        </button>

        {editExperience && (
          <ExperienceInfoForm
            experienceInfo={editExperience}
            setExperienceInfo={(updatedEntry) => {
              handleExperienceSubmit(updatedEntry);
            }}
            onCancel={() => setEditExperience(null)}
            onDelete={() => handleDeleteExperience(editExperience.id)}
          />
        )}
      </CollapsibleSection>
    </div>
  );
}
