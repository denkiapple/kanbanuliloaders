import React from 'react';
import { classes } from "./constants";
import styles from "./Toggler.module.css";

const Toggler = ({ options, selected, children, onChange }) => (
    <div className={styles.container}>
        {options.map(option => (
            <button
                key={option.id}
                className={classes(
                    styles.button,
                    selected === option.value && styles.depressedButton,
                )}
                onClick={() => onChange(option.value)}
            >
                {option.name}
            </button>
        ))}
    </div>
);

export default Toggler;
