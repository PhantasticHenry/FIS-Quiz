import "./App.css";
import Home from "./features/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import PageNotFound from "./features/pageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
