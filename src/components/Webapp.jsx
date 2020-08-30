import React, { useState } from 'react';
import styles from "./Webapp.module.css";
import { Kanban, FullLoader } from ".";
import { titles, about, classes } from "./constants";

const Webapp = ({ loader, mobile }) => {
    const [section, setSection] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(!isLoading);
    }, 4000);

    const content = (section) => (
        <>
        <div className={styles.sectionHeader}>
            <h2>{titles[section]}</h2>
        </div>
        {section === 2 ? (
            <p className={styles.about}>
                {about}
            </p>
        ) : (
            <Kanban loader={loader} isLoading={isLoading} />
        )}
        </>
    );

    return (
        <div className={styles.container}>
            {isLoading && loader === "current" && section !== 2 && (
                <FullLoader />
            )}

            <header className={classes(
                styles.header,
                mobile && styles.mobileHeader,
            )}>
                <h2 className={styles.brand}>Trulijom</h2>
                <div className={styles.sections}>
                    {titles.map((title, index) => (
                        <button
                            className={classes(
                                styles.button,
                                section === index && styles.selectedButton,
                            )}
                            onClick={() => setSection(index)}
                            key={index}
                        >
                            {titles[index]}
                        </button>
                    ))}
                </div>
                <div className={styles.user}>
                    <p>
                        Uli Uliu
                    </p>
                    <p>
                        Front-end Developer
                    </p>
                </div>
            </header>

            {content(section)}
        </div>
    );
}

export default Webapp;
