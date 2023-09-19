import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route exact path='/dashboard' element={<Dashboard />} />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
