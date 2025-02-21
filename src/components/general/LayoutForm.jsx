import { layouts } from "../resume/Layouts";

export default function LayoutForm({ selectedLayout, setSelectedLayout }) {
  return (
    <div className="layout-form">
      <h3>Layouts</h3>
      <div className="layout-selector">
        {Object.entries(layouts).map(([layoutKey, layout]) => (
          <button
            key={layoutKey}
            className={`layout-button ${
              selectedLayout === layoutKey ? "selected" : ""
            }`}
            onClick={() => {
              if (typeof setSelectedLayout === "function") {
                setSelectedLayout(layoutKey);
              } else {
                console.error("setSelectedLLayout is not a function");
              }
            }}
          >
            <img
              src={layout.image}
              alt={layout.name}
              className="layout-preview"
            />
            <span>{layout.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
