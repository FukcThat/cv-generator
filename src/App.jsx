import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import PackingList from "./PackingList";
import ColorChange from "./BGColorChange";
import Person from "./IncreaseAge";

function App() {
  return (
    <>
      <div>
        <Greeting />
        <PackingList />
        <ColorChange />
        <Person />
      </div>
    </>
  );
}

export default App;
