import { useState } from "react";
import InputGroup from "../general/InputGroup";

export default function EducationInfoForm({
  educationalInfo,
  setEducationalInfo,
  onCancel,
  onDelete,
}) {
  const [formData, setFormData] = useState({ ...educationalInfo });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.key]: e.target.value,
    });
  };
  return (
    <>
      <form className="education-info--form flex-col">
        <InputGroup
          type="text"
          id="school-name"
          labelText="School / University / Educational Institute"
          placeholder="School / University / Educational Institute"
          value={formData.schoolName}
          onChange={handleChange}
          data-key="schoolName"
        />

        <InputGroup
          type="text"
          id="degree"
          labelText="Graduation Title / Degree"
          placeholder="Graduation Title / Degree"
          value={formData.degree}
          onChange={handleChange}
          data-key="degree"
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

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={formData.description}
          onChange={handleChange}
          data-key="description"
        />

        <div className="form-control-btns flex-row">
          {/* Save Button */}
          <button
            type="button"
            onClick={() => setEducationalInfo({ ...formData })}
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
        </div>
      </form>
    </>
  );
}
