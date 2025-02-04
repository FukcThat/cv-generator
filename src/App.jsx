import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import PackingList from "./PackingList";
import ColorChange from "./BGColorChange";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Greeting />
        <PackingList />
        <ColorChange />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
