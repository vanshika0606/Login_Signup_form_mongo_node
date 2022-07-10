import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route  exact path="/" element={<Login/>}>
          </Route>
          <Route  exact path="/Login" element={<Login/>}>
          </Route>
          <Route exact path="/Signup" element={
          <Signup/>}>
          </Route>
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
