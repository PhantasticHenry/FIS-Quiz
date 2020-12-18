import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./StartQuiz.module.css";
import Questions from "../../components/questions";
import Answers from "../../components/questions/Answers";

function StartQuiz() {
  const questions = useSelector((state) => state.questions);
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const answers = questions.map((question) =>
    [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5
    )
  );

  const correct_answer = questions.map((question) => question.correct_answer);

  const handleClick = (e) => {
    if (e.target.getAttribute("value") === correct_answer[index]) {
      setIndex((prevIndex) => prevIndex + 1);
      //increase score
    } else {
      //decrease score
      console.log("incorrect answer!!!!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <Questions questions={questions} index={index} />
      </div>
      <div>
        <Answers
          answers={answers}
          index={index}
          correct_answer={correct_answer[index]}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default StartQuiz;
