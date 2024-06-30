import './App.css';
import Signin from './Components/SigninPage/Signin.js'
import Signup from './Components/SignupPage/Signup.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path="/signin" element={<Signin/>} />
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;