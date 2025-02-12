import InputGroup from "../general/InputGroup";

export default function ExperienceInfoForm({
  experienceInfo,
  setExperienceInfo,
  onCancel,
  onDelete,
}) {
  const handleChange = (e) => {
    setExperienceInfo({
      ...experienceInfo,
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
          value={experienceInfo.jobTitle}
          onChange={handleChange}
          data-key="jobTitle"
        />

        <InputGroup
          type="text"
          id="company-name"
          labelText="Company Name"
          placeholder="Company Name"
          value={experienceInfo.companyName}
          onChange={handleChange}
          data-key="companyName"
        />

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={experienceInfo.description}
          onChange={handleChange}
          data-key="description"
        />

        <InputGroup
          type="text"
          id="company-location"
          labelText="Company Location"
          placeholder="Company Location"
          value={experienceInfo.companyLocation}
          onChange={handleChange}
          data-key="companyLocation"
        />

        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={experienceInfo.startDate}
          onChange={handleChange}
          data-key="startDate"
        />

        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={experienceInfo.endDate}
          onChange={handleChange}
          data-key="endDate"
        />

        <button type="button" onClick={() => setExperienceInfo(experienceInfo)}>
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
