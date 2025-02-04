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
  const [bgTimesChanged, setBgTimesChanged] = useState(0);

  const onButtonClick = (color) => () => {
    if (color !== backgroundColor) {
      setBackgroundColor(color);
      setBgTimesChanged((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="bg-color-btns" style={{ backgroundColor }}>
      <div className="bg-times-changes">
        Color changed {bgTimesChanged} times
      </div>

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
