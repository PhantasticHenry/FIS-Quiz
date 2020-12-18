import React from "react";
import { useSelector } from "react-redux";
import Question from "./Question";

function Questions({ questions, index }) {
  // const [startQuestion, setStartQuestion] = useState(questions[index].question);
  const question = questions[index].question;

  return (
    <div className={"#"}>
      <Question question={question} />
    </div>
  );
}

export default Questions;
