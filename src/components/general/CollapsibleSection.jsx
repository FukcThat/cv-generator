import { useState } from "react";

export default function CollapsibleSection({ sectionTitle, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{sectionTitle}</span>
        <span className={`chevron ${isOpen ? "open" : ""}`}>&#9662;</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}
