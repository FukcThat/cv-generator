import { useState } from "react";
import { motion } from "framer-motion";

export default function CollapsibleSection({ sectionTitle, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapsible-section ${isOpen ? "open" : ""}`}>
      <button
        className="collapsible-header flex-row"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{sectionTitle}</span>
        <span className={`chevron ${isOpen ? "open" : ""}`}>&#9662;</span>
      </button>

      <motion.div
        className="collapsible-content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : "0", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
