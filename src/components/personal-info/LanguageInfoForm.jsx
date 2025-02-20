import { useState } from "react";
import InputGroup from "../general/InputGroup";

export default function LanguageInfoForm({
  languageInfo,
  setLanguageInfo,
  onCancel,
  onDelete,
}) {
  const [formData, setFormData] = useState({ ...languageInfo });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.key]: e.target.value,
    });
  };

  return (
    <form className="language-info--form flex-col">
      <InputGroup
        type="text"
        id="language-name"
        labelText="Language"
        placeholder="English"
        value={formData.languageName}
        onChange={handleChange}
        data-key="languageName"
      />

      <InputGroup
        type="text"
        id="language-level"
        labelText="Proficiency"
        placeholder="Native"
        value={formData.languageLevel}
        onChange={handleChange}
        data-key="languageLevel"
      />

      <InputGroup
        type="text"
        id="language-certification"
        labelText="Certification"
        placeholder="Course or Certification Title"
        value={formData.languageCertification}
        onChange={handleChange}
        data-key="languageCertification"
      />

      <div className="form-control-btns flex-row">
        <button type="button" onClick={() => setLanguageInfo({ ...formData })}>
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
      </div>
    </form>
  );
}
