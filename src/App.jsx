import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route Path="/" element={<Login/>}/>
        <Route Path="/signup" element={<Signup/>}/>
        <Route Path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
