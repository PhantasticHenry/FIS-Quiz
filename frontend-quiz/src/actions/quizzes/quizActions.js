import * as types from "../actionTypes";

const quizAPI = "http://localhost:3000/quizzes";
export const startQuiz = (quiz) => {
  return (dispatch) => {
    fetch(quizAPI),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quiz: {
            player: quiz.player,
            score: quiz.score,
          },
        })
          .then((res) => res.json())
          .then((quiz) => {
            if (quiz.error) {
              alert(quiz.details);
            } else {
              dispatch({ type: types.ADD_QUIZ, payload: quiz });
            }
          })
          .catch(console.log("***ERROR***", quiz.error)),
      };
  };
};
