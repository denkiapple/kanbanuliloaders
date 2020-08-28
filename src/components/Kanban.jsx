import React, { useState } from 'react';
import { dolorSit } from "./constants";
import { ColumnLoader } from ".";
import styles from "./Kanban.module.css";

const Card = () => (
    <div className={styles.card}>
        <h4>Lorem Ipsum</h4>
        <p>
            {dolorSit}
        </p>
    </div>
);

const Colum = ({ isLoading, loader }) => (
  <div className={styles.column}>
    {!isLoading && [1,2,3,4,5].map(idxx => (
        <Card key={idxx} />
    ))}
    {isLoading && loader !== "current" && (
        <ColumnLoader loader={loader} />
    )}
  </div>
);

const Kanban = ({ loader, isLoading }) => {
  return (
    <div className={styles.container}>
      {[1,2,3,4,5].map(idx => (
        <Colum key={idx} isLoading={isLoading} loader={loader} />
      ))}
    </div>
  );
}

export default Kanban;
