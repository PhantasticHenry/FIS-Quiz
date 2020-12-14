import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import PageNotFound from "./features/pageNotFound";
import StartQuiz from "./features/startQuiz";
import Questions from "./features/questions";
import Home from "./features/home";
import { getQuestions } from "./actions/questions/getQuestions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/start-quiz" component={StartQuiz} />
          <Route exact path="/questions" component={Questions} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
