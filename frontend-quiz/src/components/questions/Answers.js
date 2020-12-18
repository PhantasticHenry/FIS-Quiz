import React, { useState } from "react";
import styles from "./Questions.module.css";

function Answers({ answers, index, correct_answer, handleClick }) {
  const options = answers[index];
  const [clicked, setClicked] = useState(false);

  // const handleClick = (e) => {
  //   // setClicked(!clicked);
  //   // console.log("testing", e.target.getAttribute("value"));
  //   // console.log(("testing!!!!", correct_answer));
  //   if (e.target.getAttribute("value") === correct_answer) {
  //     setClicked(!clicked);
  //     console.log("worked!!!", clicked);
  //   } else {
  //     console.log("didn't match!", clicked);
  //   }
  // };

  return (
    <div className={styles.answerContainer}>
      <div className={styles.option} onClick={handleClick} value={options[0]}>
        {options[0]}
      </div>
      <div className={styles.option1} onClick={handleClick} value={options[1]}>
        {options[1]}
      </div>
      <div className={styles.option2} onClick={handleClick} value={options[2]}>
        {options[2]}
      </div>
      <div className={styles.option3} onClick={handleClick} value={options[3]}>
        {options[3]}
      </div>
    </div>
  );
}

export default Answers;
