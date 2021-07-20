import './App.css';
import Home from "./components/Home"
import Learn from "./components/Learn"
import AboutPage from "./components/AboutPage"
import QuestionsPage from "./components/QuestionsPage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/learn" component={Learn}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/learn/:course" component={QuestionsPage}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
