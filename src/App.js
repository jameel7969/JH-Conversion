import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type )=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#41464b';
      showAlert('Dark Mode has been Activated','Success')
      document.title='JH React - Dark mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been Activated','Success')
      document.title='JH React - Light mode';
    }
  }

  return (
    <>
    <Router>
        <Navbar title="My App" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/TextForm" element={<TextForm  heading="Case Conversion" mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
    </Router>
    </>
  );
}
export default App;
