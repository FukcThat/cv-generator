function FirstNameInput({ firstName, setFirstName }) {
  return (
    <input
      type="text"
      value={firstName}
      placeholder="First Name"
      onChange={(e) => setFirstName(e.target.value)}
    />
  );
}

function LastNameInput({ lastName, setLastName }) {
  return (
    <input
      type="text"
      value={lastName}
      placeholder="Last Name"
      onChange={(e) => setLastName(e.target.value)}
    />
  );
}

export { FirstNameInput, LastNameInput };
