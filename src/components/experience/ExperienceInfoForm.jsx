import { useState } from "react";
import InputGroup from "../general/InputGroup";

export default function ExperienceInfoForm({
  experienceInfo,
  setExperienceInfo,
  onCancel,
  onDelete,
}) {
  const [formData, setFormData] = useState({ ...experienceInfo });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.key]: e.target.value,
    });
  };

  return (
    <>
      <form className="experience-info--form">
        <InputGroup
          type="text"
          id="job-title"
          labelText="Job title / Position"
          placeholder="Job title / Position"
          value={formData.jobTitle}
          onChange={handleChange}
          data-key="jobTitle"
        />

        <InputGroup
          type="text"
          id="company-name"
          labelText="Company Name"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          data-key="companyName"
        />

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={formData.description}
          onChange={handleChange}
          data-key="description"
        />

        <InputGroup
          type="text"
          id="company-location"
          labelText="Company Location"
          placeholder="Company Location"
          value={formData.companyLocation}
          onChange={handleChange}
          data-key="companyLocation"
        />

        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          data-key="startDate"
        />

        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={formData.endDate}
          onChange={handleChange}
          data-key="endDate"
        />

        <button
          type="button"
          onClick={() => setExperienceInfo({ ...formData })}
        >
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        {onDelete && (
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        )}
      </form>
    </>
  );
}
