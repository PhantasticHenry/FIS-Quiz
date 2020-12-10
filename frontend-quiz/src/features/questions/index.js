import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../actions/getQuestions";
import Question from "./Question";
import styles from "./Questions.module.css";

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  const question = questions.map((question) => (
    <Question question={question} key={question.id} />
  ));

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return <div className={styles.cardGrid}>{question}</div>;
}

export default Questions;
