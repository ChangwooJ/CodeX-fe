import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommonComponents from './layouts/CommonComponents';

import "./App.css";
import ChallengeDetail from './pages/ChallengeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CommonComponents />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='/challenge/:problemId' element={<ChallengeDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
