import InputGroup from "../general/InputGroup";

export default function EducationInfoForm({
  educationalInfo,
  setEducationalInfo,
}) {
  return (
    <>
      <form className="education-info--form">
        <InputGroup
          type="text"
          id="school-name"
          labelText="School / University / Educational Institute"
          placeholder="School / University / Educational Institute"
          value={educationalInfo.schoolName}
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              schoolName: e.target.value,
            });
          }}
          data-key="schoolName"
        />

        <InputGroup
          type="text"
          id="degree"
          labelText="Graduation Title / Degree"
          placeholder="Graduation Title / Degree"
          value={educationalInfo.degree}
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              degree: e.target.value,
            });
          }}
          data-key="degree"
        />

        <InputGroup
          type="date"
          id="start-date"
          labelText="Start Date"
          value={educationalInfo.startDate}
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              startDate: e.target.value,
            });
          }}
          data-key="startDate"
        />

        <InputGroup
          type="date"
          id="end-date"
          labelText="End Date"
          value={educationalInfo.endDate}
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              endDate: e.target.value,
            });
          }}
          data-key="endDate"
        />

        <InputGroup
          type="textarea"
          id="description"
          labelText="Description and achievements"
          value={educationalInfo.description}
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              description: e.target.value,
            });
          }}
          data-key="description"
        />
      </form>
    </>
  );
}
