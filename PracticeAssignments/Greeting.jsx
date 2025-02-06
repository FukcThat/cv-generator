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
      <input
        placeholder="Please enter a name..."
        aria-label="Please enter a name"
        name="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={submitName}>Ok</button>
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default Greeting;
