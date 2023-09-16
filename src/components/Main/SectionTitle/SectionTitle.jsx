import "./SectionTitle.css";

export default function SectionTitle({ variableTitleClass, children }) {
  return (
    <h2 className={`section-title ${variableTitleClass}`}>{children}</h2>
  )
};