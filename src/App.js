import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#202020';
      showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return ( //jsx
  <>
  <Router>
    <Navbar title="TextEditor" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
    <Routes>
            <Route exact path="/about" Component={About} />
            <Route exact path="/" element={<TextForm showAlert={setAlert} heading = "Enter the text to analyse below" mode={mode}/>} />
      </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;