import React from "react";
import styles from "./Popup.module.css";

function Popup({ content, turnBlurOff }) {
  console.log("testing***", turnBlurOff);
  return (
    <div className={`${styles.popup}`}>
      {/* <div className={`${styles.popup} ${styles.blur}`}> */}
      <div className={styles.content}>
        <h1>{content}</h1>
        {/* <Button turnBlurOff={turnBlurOff} begin={"Begin!"} /> */}
      </div>
    </div>
  );
}

export default Popup;
