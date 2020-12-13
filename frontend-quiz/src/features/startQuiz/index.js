import React from "react";
import { useSelector } from "react-redux";
import styles from "./StartQuiz.module.css";

function StartQuiz() {
  const questions = useSelector((state) => state.questions);
  const question = questions.map((question) => question.question);

  return (
    <div className={styles.container}>
      <div className={styles.question}>{question}</div>
    </div>
  );
}

export default StartQuiz;
