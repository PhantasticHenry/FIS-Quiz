import React, { useState } from "react";
import styles from "./Questions.module.css";

function Question({ question }) {
  const [flip, setFlip] = useState(false);

  const options = [...question.incorrect_answers, question.correct_answer];

  const questionFront = (
    <div className={styles.front}>
      {question.question}
      <div className={styles.questionOptions}>
        {options.map((option) => {
          return (
            <div className={styles.questionOption} key={option + Date.now()}>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className={`${styles.card} ${flip ? styles.flip : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className={styles.back}>{question.answer}</div>
      {flip ? question.correct_answer : questionFront}
    </div>
  );
}

export default Question;
