// import logo from './logo.svg';
//import { useState } from 'react/cjs/react.development';
import './App.css';
import React ,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//  import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(() => {
     setAlert(null)
     
   }, 2000);

  }
 const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark Mode is Enabled","success")
      // useto hihglight the title
      // setInterval(() => {
      //  document.title="Textutils Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Textutils "
      // }, 1500);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode is Enabled","success")
    }
  }
  return ( 
    <>
    {/* <Router> */}
    <Navbar title='Textutils' aboutText="About textutils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
    {/* <Navbar/> */}
    
    <div className="container">

    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
          {/* <About/ > */}
          {/* </Route> */}

          {/* <Route exact path="/"> */}
          <TextForm heading='Enter the text below to analyze' showAlert={showAlert} mode={mode} / >
          {/* </Route> */}

        {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
