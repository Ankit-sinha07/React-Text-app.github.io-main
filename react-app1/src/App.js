import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"




function App() {
  const [mode, setMode] = useState('dark'); //Tells us whether the dark mode is enable or not.
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(()=>{
        setAlert(null)
      }, 5000)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'dark'
      showAlert("Dark mode has been enabled", "success")
      document.title = "Educational React-App - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'light'
      showAlert("Light mode has been enabled", "success")
      document.title = "Educational React-App - Light Mode"
  }
}
  return (
    <>
    <Router>
    <Navbar title="Educational React-App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

      <Switch>
        <Route path="/about">
          <About/>
        </Route>

        <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
