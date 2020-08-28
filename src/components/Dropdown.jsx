import React from 'react';
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, children, onChange }) => {
  return (
    <select
        id="loaders"
        className={styles.container}
        onChange={e => onChange(e.target.value)}
    >
        {options.map(option => (
            <option
                id={option.id}
                key={option.id}
                value={option.value}
            >
                {option.name}
            </option>
        ))}
    </select>
  );
}

export default Dropdown;
