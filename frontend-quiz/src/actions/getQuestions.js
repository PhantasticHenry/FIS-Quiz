import * as types from "./actionTypes";

const questionsAPI = "http://localhost:3000/questions";

export const getQuestions = () => {
  return (dispatch) => {
    fetch(questionsAPI)
      .then((res) => res.json())
      .then((questions) =>
        dispatch({ type: types.FETCH_QUESTIONS, payload: questions })
      )
      .catch((error) => console.log("ERROR!!!", error));
  };
};
