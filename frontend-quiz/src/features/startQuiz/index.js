import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./StartQuiz.module.css";
import Questions from "../../components/questions";
import Answers from "../../components/questions/Answers";
import Popup from "../../components/popup";

function StartQuiz() {
  const questions = useSelector((state) => state.questions);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chancesLeft, setChancesLeft] = useState(2);
  const [toggleBlur, setToggleBlur] = useState(false);
  const answers = questions.map((question) =>
    [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5
    )
  );

  const correct_answer = questions.map((question) => question.correct_answer);
  const nextQuestion = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  // useEffect(() => {
  //   console.log("current score", score);
  //   console.log("chances left", chancesLeft);
  // }, [score, chancesLeft]);

  const handleClick = (e) => {
    if (e.target.getAttribute("value") === correct_answer[index]) {
      if (chancesLeft === 2) {
        setScore((prevScore) => prevScore + 10);
        setChancesLeft(2);
        nextQuestion();
      } else if (chancesLeft === 0) {
        setScore((prevScore) => 3 + prevScore);
        setChancesLeft(2);
        nextQuestion();
      } else {
        setScore((prevScore) => 6 + prevScore);
        setChancesLeft(2);
        nextQuestion();
      }
    } else if (chancesLeft === 0) {
      setIndex(0);
      setChancesLeft(2);
      alert("Sorry please try again.  3 strikes and you are out!");
    } else {
      setChancesLeft((prevChancesLeft) => prevChancesLeft - 1);
    }
  };

  // const pointSystem =
  //   "You have 3 attempts to answer correctly or quiz will restart.  Earn a maximum of 10 points with 3 attempts remaining or 3 points per attempt remaining. ";

  return (
    <div className={styles.container}>
      {alert(
        "You have 3 attempts to answer correctly or quiz will restart.  Earn a maximum of 10 points with 3 attempts remaining or 3 points per attempt remaining. "
      )}
      <div className={styles.question}>
        <Questions questions={questions} index={index} />
      </div>
      <div>
        <Answers
          answers={answers}
          index={index}
          // correct_answer={correct_answer[index]}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default StartQuiz;
