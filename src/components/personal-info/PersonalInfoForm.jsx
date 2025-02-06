import InputGroup from "../general/InputGroup";

export default function PersonalInfoForm({
  fullName,
  address,
  phoneNumber,
  email,
  birthdate,
  onInfoChange,
}) {
  return (
    <>
      <form className="personal-info-form flex-col">
        <h3>Personal Info</h3>
        <InputGroup
          type="text"
          id="full-name"
          labelText="First and last name"
          placeholder="First and last name"
          value={fullName}
          onChange={onInfoChange}
          data-key="fullName"
        />
        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="Street, City, Country"
          value={address}
          onChange={onInfoChange}
          data-key="address"
        />
        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder={"+99 1234 34567891"}
          value={phoneNumber}
          onChange={onInfoChange}
          data-key="phoneNumber"
        />
        <InputGroup
          type="email"
          id="email"
          labelText="E-Mail"
          placeholder="someone@something.com"
          value={email}
          onChange={onInfoChange}
          data-key="email"
        />
        <InputGroup
          type="date"
          id="birthdate"
          labelText="Date of birth"
          placeholder="01.01.2000"
          value={birthdate}
          onChange={onInfoChange}
          data-key="birthdate"
          optional
        />
        {/* <label htmlFor="personal-info--picture">Upload an Image</label>
        <input id="personal-info--picture" type="file" /> */}
      </form>
    </>
  );
}
