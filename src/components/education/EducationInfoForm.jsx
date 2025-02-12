import InputGroup from "../general/InputGroup";

export default function EducationInfoForm({
  educationalInfo,
  setEducationalInfo,
  onCancel,
  onDelete,
}) {
  const handleChange = (e) => {
    setEducationalInfo({
      ...educationalInfo,
      [e.target.dataset.key]: e.target.value,
    });
  };
  return (
    <>
      <form className="education-info--form">
        <InputGroup
          type="text"
          id="school-name"
          labelText="School / University / Educational Institute"
          placeholder="School / University / Educational Institute"
          value={educationalInfo.schoolName}
          onChange={handleChange}
          data-key="schoolName"
        />

        <InputGroup
          type="text"
          id="degree"
          labelText="Graduation Title / Degree"
          placeholder="Graduation Title / Degree"
          value={educationalInfo.degree}
          onChange={handleChange}
          data-key="degree"
        />

        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={educationalInfo.startDate}
          onChange={handleChange}
          data-key="startDate"
        />

        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={educationalInfo.endDate}
          onChange={handleChange}
          data-key="endDate"
        />

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={educationalInfo.description}
          onChange={handleChange}
          data-key="description"
        />
        {/* Save Button */}
        <button
          type="button"
          onClick={() => setEducationalInfo(educationalInfo)}
        >
          Save
        </button>

        {/* Cancel Button */}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        {/* Delete Button */}
        {onDelete && (
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        )}
      </form>
    </>
  );
}
