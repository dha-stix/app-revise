import HomePage from './components/HomePage';
import {Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Question from './components/Question';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="question/:course" element={<Question/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
