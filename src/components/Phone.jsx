import React from 'react';
import styles from "./Phone.module.css";

const Phone = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        {children}
      </div>
    </div>
  );
}

export default Phone;
