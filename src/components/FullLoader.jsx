import React from 'react';
import styles from "./FullLoader.module.css";

const FullLoader = () => (
    <div className={styles.layout}>
        <div className={styles.bolisContainer}>
            <div className={styles.bolis}></div>
            <div className={styles.bolis}></div>
            <div className={styles.bolis}></div>
        </div>
    </div>
);

export default FullLoader;
