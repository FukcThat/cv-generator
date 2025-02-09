import InputGroup from "../general/InputGroup";

export default function ExperienceInfoForm({
  experienceInfo,
  setExperienceInfo,
}) {
  return (
    <>
      <form className="experience-info--form">
        <InputGroup
          type="text"
          id="job-title"
          labelText="Job title / Position"
          placeholder="Job title / Position"
          value={experienceInfo.jobTitle}
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              jobTitle: e.target.value,
            });
          }}
          data-key="jobTitle"
        />

        <InputGroup
          type="text"
          id="company-name"
          labelText="Company Name"
          placeholder="Company Name"
          value={experienceInfo.companyName}
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              companyName: e.target.value,
            });
          }}
          data-key="companyName"
        />

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={experienceInfo.description}
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              description: e.target.value,
            });
          }}
          data-key="description"
        />

        <InputGroup
          type="text"
          id="company-location"
          labelText="Company Location"
          placeholder="Company Location"
          value={experienceInfo.companyLocation}
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              companyLocation: e.target.value,
            });
          }}
          data-key="companyLocation"
        />

        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={experienceInfo.startDate}
          onChange={(e) => {
            setexperienceInfo({
              ...experienceInfo,
              startDate: e.target.value,
            });
          }}
          data-key="startDate"
        />

        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={experienceInfo.endDate}
          onChange={(e) => {
            setexperienceInfo({
              ...experienceInfo,
              endDate: e.target.value,
            });
          }}
          data-key="endDate"
        />
      </form>
    </>
  );
}
