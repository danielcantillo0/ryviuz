// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routes/home/home';
import Rankings from './routes/rankings/rankings';
import Scores from './routes/scoreExplanations/scores';
import ReviewEditor from './routes/text/ReviewEditor';
import Login from './routes/login/Login';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='navbar'>
          <nav>
            <ul className='nav-links'>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/rankings">Rankings</Link> </li>
              <li><Link to="/scores">Score Explanations</Link> </li>
              <li><Link to="/text">Text Editor</Link> </li>
              <li className='login-link'><Link to="/login">Login</Link> </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/text" element={<ReviewEditor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> {/* Route for the sign-up page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

