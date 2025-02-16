import { useEffect, useRef, useState } from "react";

export default function CollapsibleSection({ sectionTitle, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [allOpen, setAllOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setMaxHeight(`${height}px`);
        setTimeout(() => setAllOpen(true), 300);
      }
    } else {
      setMaxHeight("0px");
      setAllOpen(false);
    }
  }, [isOpen]);

  return (
    <div className={`collapsible-section ${isOpen ? "open" : ""}`}>
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{sectionTitle}</span>
        <span className={`chevron ${isOpen ? "open" : ""}`}>&#9662;</span>
      </button>
      {isOpen && (
        <div
          className="collapsible-content flex-col"
          ref={contentRef}
          style={{
            maxHeight: maxHeight,
            opacity: allOpen ? 1 : 0,
            transition: "max-height 0.3s ease-in-out, opacity 0.1s ease-in-out",
            overflow: isOpen ? "visible" : "hidden",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
