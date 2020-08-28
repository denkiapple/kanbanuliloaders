import React from 'react';
import styles from "./Tablet.module.css";

const Tablet = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        {children}
      </div>
    </div>
  );
}

export default Tablet;
