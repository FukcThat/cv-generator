import InputGroup from "../general/InputGroup";

export default function SkillsInfoForm({
  skillsInfo,
  setSkillsInfo,
  onCancel,
  onDelete,
}) {
  const [formData, setFormData] = useState({ ...skillsInfo });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.key]: e.target.value,
    });
  };

  return (
    <form className="skills-info--form flex-col">
      <InputGroup
        type="text"
        id="skill-name"
        labelText="Skill or special Knowledge"
        placeholder="Juggling"
        value={formData.skillName}
        onChange={handleChange}
        data-key="skillName"
      />

      <div className="form-control-btns flex-row">
        <button type="button" onClick={() => setSkillsInfo({ ...formData })}>
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
