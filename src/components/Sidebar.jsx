import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { easeInOut, motion, AnimatePresence, Reorder } from "framer-motion";
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

  const handleReorderEducation = (newOrder) => setEducationalInfo(newOrder);
  const handleReorderExperience = (newOrder) => setExperienceInfo(newOrder);

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
      {/* Personal Info Form  */}
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      {/* Education Info Form */}
      <CollapsibleSection sectionTitle="Education">
        <Reorder.Group
          axis="y"
          values={educationalInfo}
          onReorder={handleReorderEducation}
          className="reorder-group"
        >
          {educationalInfo.map((entry) => (
            <Reorder.Item
              key={entry.id}
              value={entry}
              className="entry-btn"
              whileDrag={{ scale: 1.05 }}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div
                key={entry.id}
                className="entry-title"
                onClick={() => setEditEducation(entry)}
              >
                {entry.schoolName}
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <button className="add-section-btn" onClick={addNewEducation}>
          + Education
        </button>

        <AnimatePresence>
          {editEducation && (
            <motion.div
              key={editEducation.id}
              className="collapsible-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: editEducation ? "auto" : 0,
                opacity: editEducation ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ overflow: "hidden" }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  setTimeout(() => setEditEducation(null), 50);
                }
              }}
            >
              <EducationInfoForm
                educationalInfo={editEducation}
                setEducationalInfo={(updatedEntry) => {
                  handleEducationSubmit(updatedEntry);
                }}
                onCancel={() => setEditEducation(null)}
                onDelete={() => handleDeleteEducation(editEducation.id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleSection>

      {/* Experience Info Form */}
      <CollapsibleSection sectionTitle="Experience">
        <Reorder.Group
          axis="y"
          values={experienceInfo}
          onReorder={handleReorderExperience}
          className="reorder-group"
        >
          {experienceInfo.map((entry) => (
            <Reorder.Item
              key={entry.id}
              value={entry}
              className="entry-btn"
              whileDrag={{ scale: 1.05 }}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div
                key={entry.id}
                className="entry-title"
                onClick={() => setEditExperience(entry)}
              >
                {entry.companyName}
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <button className="add-section-btn" onClick={addNewExperience}>
          + Experience
        </button>

        <AnimatePresence>
          {editExperience && (
            <motion.div
              key={editExperience.id}
              className="collapsible-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: editEducation ? "auto" : 0,
                opacity: editEducation ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ overflow: "hidden" }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  setTimeout(() => setEditExperience(null), 50);
                }
              }}
            >
              <ExperienceInfoForm
                experienceInfo={editExperience}
                setExperienceInfo={(updatedEntry) => {
                  handleExperienceSubmit(updatedEntry);
                }}
                onCancel={() => setEditExperience(null)}
                onDelete={() => handleDeleteExperience(editExperience.id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleSection>
    </div>
  );
}
