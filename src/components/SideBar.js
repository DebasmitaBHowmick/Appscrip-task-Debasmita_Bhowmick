import { useState } from "react";
import styles from "@/styles/sidebar.module.css";

const sections = [
  { title: "IDEAL FOR",
 options: ["Men", "Women", "Baby & Kids"],
  },
  { title: "OCCASION" },
  { title: "WORK" },
  { title: "FABRIC" },
  { title: "SEGMENT" },
  { title: "SUITABLE FOR" },
  { title: "RAW MATERIALS" },
  { title: "PATTERN" },
];

const SideBar = ({ isOpen }) => {

const [expandedSections, setExpandedSections] = useState(0);

//selction fof filters
const [selectedOptions, setSelectedOptions] = useState({idealFor: []});

const toggleOption = (sectionTitle, option) => {
  setSelectedOptions(prev => {
    const currentSection = prev[sectionTitle] || [];
    const newSelected = currentSection.includes(option)  ? currentSection.filter(opt => opt !== option)
      : [...currentSection, option];
    return {...prev, [sectionTitle]: newSelected};
  });
};

 const unselectAll = (sectionKey) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [sectionKey]: [],
    }));
  };

  return (
    <aside className={`${styles.sidebar} ${ isOpen ? styles.open : styles.closed }`}>
      {/* Customizable */}
      <label className={styles.checkbox}>
        <input type="checkbox" />
        CUSTOMIZABLE
      </label>

      {sections.map((section, index) => (
        <div key={section.title} className={styles.section}>
          <button className={styles.sectionHeader}
            onClick={() => setExpandedSections(expandedSections === index ? null : index)}   >
            <span>{section.title}</span>
            <span className={styles.arrow}>
              {expandedSections === index ? "˄" : "˅"}
            </span>
          </button>

          {/* Sections with options */}
          {expandedSections === index && section.options && (
            <div className={styles.options}>
              <span className={styles.all}>All</span>
              <button className={styles.unselect}onClick={() => unselectAll(section.title)} >
                Unselect all
              </button>

              {section.options.map((opt) => (
                <label key={opt} className={styles.option}>
                  <input    type="checkbox"    checked={selectedOptions[section.title]?.includes(opt) || false }  
                    onChange={() => toggleOption(section.title, opt)} />
                   {opt}
                </label>
              ))}
            </div>
          )}

          {/* Sections without options */}
          {expandedSections === index && !section.options && (
            <div className={styles.allOnly}>All</div>
          )}
        </div>
      ))}
    </aside>
  )
}

export default SideBar