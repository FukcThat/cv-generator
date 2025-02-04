import { useState } from "react";
import { FirstNameInput, LastNameInput } from "./CustomInput";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const setFirstName = (name) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      firstName: name,
    }));
  };

  const setLastName = (name) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      lastName: name,
    }));
  };

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <FirstNameInput
        firstName={person.firstName}
        setFirstName={setFirstName}
      />

      <LastNameInput lastName={person.lastName} setLastName={setLastName} />

      <h3>
        Name: {person.firstName} {person.lastName}
      </h3>
      <h4>Age: {person.age}</h4>
      <button onClick={handleIncreaseAge}>Add a year</button>
    </>
  );
}
