import Login from "./components/Login";
import {Route, Routes} from "react-router-dom"
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import QuestionsPage from "./components/QuestionsPage";

function App() {
  return (
    <div className="App">
      <Routes>

              <Route exact path="/" element={<Homepage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/learn/:course" element={<QuestionsPage/>}/>     
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="*" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
