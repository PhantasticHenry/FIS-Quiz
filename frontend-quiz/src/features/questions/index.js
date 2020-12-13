import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
import styles from "./Questions.module.css";

function Questions() {
  const questions = useSelector((state) => state.questions);

  const question = questions.map((question) => (
    <Question question={question} key={question.id} />
  ));

  return <div className={styles.cardGrid}>{question}</div>;
}

export default Questions;
