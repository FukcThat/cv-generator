import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { easeInOut, motion, AnimatePresence, Reorder } from "framer-motion";
import LayoutForm from "./general/LayoutForm";
import LanguageInfoForm from "./personal-info/LanguageInfoForm";
import EducationInfoForm from "./education/EducationInfoForm";
import ExperienceInfoForm from "./experience/ExperienceInfoForm";
import CollapsibleSection from "./general/CollapsibleSection";
import PersonalInfoForm from "./personal-info/PersonalInfoForm";
import SkillsInfoForm from "./personal-info/SkillsInfoForm";

export default function Sidebar({
  selectedLayout,
  setSelectedLayout,
  personalInfo,
  setPersonalInfo,
  languageInfo,
  setLanguageInfo,
  skillsInfo,
  setSkillsInfo,
  educationalInfo,
  setEducationalInfo,
  experienceInfo,
  setExperienceInfo,
}) {
  const [editSkill, setEditSkill] = useState(null);
  const [editLanguage, setEditLanguage] = useState(null);
  const [editEducation, setEditEducation] = useState(null);
  const [editExperience, setEditExperience] = useState(null);

  const handleReorderSkills = (newOrder) => setSkillsInfo(newOrder);
  const handleReorderLanguage = (newOrder) => setLanguageInfo(newOrder);
  const handleReorderEducation = (newOrder) => setEducationalInfo(newOrder);
  const handleReorderExperience = (newOrder) => setExperienceInfo(newOrder);

  const addNewSkill = () =>
    setEditSkill({
      id: uuidv4(),
      skillName: "",
    });

  const addNewLanguage = () =>
    setEditLanguage({
      id: uuidv4(),
      languageName: "",
      languageLevel: "",
      languageCertification: "",
    });

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

  const handleSkillSubmit = (entry) => {
    handleEditSubmit(entry, skillsInfo, setSkillsInfo, editSkill, setEditSkill);
  };

  const handleLanguageSubmit = (entry) => {
    handleEditSubmit(
      entry,
      languageInfo,
      setLanguageInfo,
      editLanguage,
      setEditLanguage
    );
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

  const handleDeleteSkill = (id) => {
    setSkillsInfo((prev) => prev.filter((entry) => entry.id !== id));

    if (editSkill?.id === id) {
      setEditSkill(null);
    }
  };

  const handleDeleteLanguage = (id) => {
    setLanguageInfo((prev) => prev.filter((entry) => entry.id !== id));

    if (editLanguage?.id === id) {
      setEditLanguage(null);
    }
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
      <LayoutForm
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}
      />

      {/* Personal Info Form  */}
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      {/* Skills Info Form */}
      <CollapsibleSection sectionTitle="Skills">
        <Reorder.Group
          axis="y"
          values={skillsInfo}
          onReorder={handleReorderSkills}
          className="reorder-group"
        >
          {skillsInfo.map((entry) => (
            <Reorder.Item
              key={entry.id}
              value={entry}
              className="entry-btn"
              whileDrag={{ scale: 1.05 }}
              onClick={() => setEditSkill(entry)}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div key={entry.id} className="entry-title">
                {entry.skillName}
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <button className="add-section-btn" onClick={addNewSkill}>
          + Skill
        </button>

        <AnimatePresence>
          {editSkill && (
            <motion.div
              key={editSkill.id}
              className="collapsible-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: editSkill ? "auto" : 0,
                opacity: editSkill ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ overflow: "hidden" }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  setTimeout(() => setEditSkill(null), 50);
                }
              }}
            >
              <SkillsInfoForm
                skillsInfo={editSkill}
                setSkillsInfo={(updatedEntry) => {
                  handleSkillSubmit(updatedEntry);
                }}
                onCancel={() => setEditSkill(null)}
                onDelete={() => handleDeleteSkill(editSkill.id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleSection>

      {/* Language Info Form */}
      <CollapsibleSection sectionTitle="Languages">
        <Reorder.Group
          axis="y"
          values={languageInfo}
          onReorder={handleReorderLanguage}
          className="reorder-group"
        >
          {languageInfo.map((entry) => (
            <Reorder.Item
              key={entry.id}
              value={entry}
              className="entry-btn"
              whileDrag={{ scale: 1.05 }}
              onClick={() => setEditLanguage(entry)}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div key={entry.id} className="entry-title">
                {entry.languageName}
                {" - "} {entry.languageLevel}
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <button className="add-section-btn" onClick={addNewLanguage}>
          + Language
        </button>

        <AnimatePresence>
          {editLanguage && (
            <motion.div
              key={editLanguage.id}
              className="collapsible-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: editLanguage ? "auto" : 0,
                opacity: editLanguage ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ overflow: "hidden" }}
              onAnimationComplete={(definition) => {
                if (definition === "exit") {
                  setTimeout(() => setEditLanguage(null), 50);
                }
              }}
            >
              <LanguageInfoForm
                languageInfo={editLanguage}
                setLanguageInfo={(updatedEntry) => {
                  handleLanguageSubmit(updatedEntry);
                }}
                onCancel={() => setEditLanguage(null)}
                onDelete={() => handleDeleteLanguage(editLanguage.id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleSection>

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
              onClick={() => setEditEducation(entry)}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div key={entry.id} className="entry-title">
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
              onClick={() => setEditExperience(entry)}
            >
              <motion.div
                className="drag-handle"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                ∷
              </motion.div>
              <div key={entry.id} className="entry-title">
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
                height: editExperience ? "auto" : 0,
                opacity: editExperience ? 1 : 0,
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
