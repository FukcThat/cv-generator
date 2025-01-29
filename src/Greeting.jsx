import { useState } from "react";

function Greeting() {
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");

  function submitName() {
    setName(nameInput);
    setNameInput("");
  }

  return (
    <div className="flex-col">
      <label htmlFor="name">Please provide a name</label>
      <input
        name="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={submitName}>Ok</button>
      <h2>Hello, {name}</h2>;
    </div>
  );
}

export default Greeting;
