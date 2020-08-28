import React, { useState } from 'react';
import { Phone, Tablet, Dropdown, Toggler, Webapp } from ".";
import { viewPorts, loaders } from "./constants";
import styles from "./Detail.module.css";

const Detail = ({ ...props }) => {
  const [loader, setLoader] = useState(loaders[0].value);
  const [mobile, setMobile] = useState(viewPorts[0].value);

  const Wrapper = children => {
    if (mobile) return (
      <Phone>
        {children}
      </Phone>
    )
    
    return (
      <Tablet>
        {children}
      </Tablet>
    )
  };

  return (
    <div className={styles.layout}>
        {Wrapper(
          <Webapp loader={loader} mobile={mobile} />
        )}
        <div className={styles.controls}>
          <Dropdown options={loaders} onChange={setLoader} />
          <Toggler options={viewPorts} selected={mobile} onChange={setMobile} />
        </div>
    </div>
  );
}

export default Detail;
