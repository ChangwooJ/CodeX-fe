import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommonComponents from './layouts/CommonComponents';

import "./App.css";
import ChallengeDetail from './pages/ChallengeDetail';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CommonComponents />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='/challenge/:problemId' element={<ChallengeDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
