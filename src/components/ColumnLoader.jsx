import React from 'react';
import { loaders, classes } from "./constants";
import styles from "./ColumnLoader.module.css";

const SkellyCard = ({loader}) => (
    <div className={classes(
        styles.card,
        loader === loaders[2].value && styles.skellington,
        loader === loaders[4].value && styles.arrival,
    )}>
        {loader === "inner-skellington" && [1,2,3].map(() => (
            <h3 className={styles.skellington}>&nbsp;</h3>
        ))}
    </div>
);

const ColumnLoader = ({ loader }) => (
    <div className={classes(
            styles.layout,
            loader !== loaders[1].value && styles.cardedLayout,
        )}
    >
        {loader === loaders[1].value ? (
            <div className={styles.bolisContainer}>
                <div className={styles.bolis}></div>
                <div className={styles.bolis}></div>
                <div className={styles.bolis}></div>
            </div>
        ) : (
            <div>
                {[1,2,3].map(() => (
                    <SkellyCard loader={loader} />
                ))}
            </div>
        )}
    </div>
);

export default ColumnLoader;
