import { useState } from "react";

const COLORS = [
  "indianred",
  "seagreen",
  "steelblue",
  "darkgoldenrod",
  "violet",
];

export default function ColorChange() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="bg-color-btns" style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
