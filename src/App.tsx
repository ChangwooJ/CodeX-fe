import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommonComponents from './layouts/CommonComponents';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<CommonComponents />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
