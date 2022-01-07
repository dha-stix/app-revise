import LandingPage from './components/LandingPage';
import {Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Question from './components/Question';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="question/:course" element={<Question/>}/>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
