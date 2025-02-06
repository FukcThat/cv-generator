import InputGroup from "../general/InputGroup";

export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  return (
    <>
      <form className="personal-info-form flex-col">
        <h3>Personal Info</h3>
        <InputGroup
          type="text"
          id="full-name"
          labelText="First and last name"
          placeholder="First and last name"
          value={personalInfo.fullName}
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, fullName: e.target.value });
          }}
          data-key="fullName"
        />
        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="Street, City, Country"
          value={personalInfo.address}
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, address: e.target.value });
          }}
          data-key="address"
        />
        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder={"+99 1234 34567891"}
          value={personalInfo.phoneNumber}
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value });
          }}
          data-key="phoneNumber"
        />
        <InputGroup
          type="email"
          id="email"
          labelText="E-Mail"
          placeholder="someone@something.com"
          value={personalInfo.email}
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, email: e.target.value });
          }}
          data-key="email"
        />
        <InputGroup
          type="date"
          id="birthdate"
          labelText="Date of birth"
          value={personalInfo.birthdate}
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, birthdate: e.target.value });
          }}
          data-key="birthdate"
          optional
        />
        {/* <label htmlFor="personal-info--picture">Upload an Image</label>
        <input id="personal-info--picture" type="file" /> */}
      </form>
    </>
  );
}
