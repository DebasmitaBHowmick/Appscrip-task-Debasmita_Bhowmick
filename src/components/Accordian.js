import { useEffect, useRef, useState } from "react";
import styles from "@/styles/accordian.module.css";

const Accordian = ({totalItems, sortOption, onSortChange, onToggleFilters, filters}) => {

const [open, setOpen] = useState(false);
const wrappedRef = useRef(null);

const options= [
     "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
];


//for closing dropdown when clicked outside
useEffect(()=> {
    const handleClickOutside = (e) => {
        if (wrappedRef.current && !wrappedRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);




  return (
     <div className={styles.toolbar}>
      <div className={styles.toolbarLeft}>
        <span className={styles.itemCount}>{totalItems} ITEMS</span>

        <button className={styles.filterToggle} onClick={onToggleFilters}>
          {filters ? "< HIDE FILTERS" : "> SHOW FILTERS"}
        </button>
      </div>

      <div className={styles.toolbarRight} ref={wrappedRef}>
        <button
          className={styles.sortButton} onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }} >
          {sortOption}
          <span
            className={styles.arrow}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
            ⌄
          </span>
        </button>

        {open && (
          <ul className={styles.sortDropdown} onClick={(e)=> e.stopPropagation()}>
            {options.map((option) => (
              <li key={option}
                className={option === sortOption ? styles.active : ""}   onClick={() => {
                  onSortChange(option);
                  setOpen(false);
                }}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Accordian