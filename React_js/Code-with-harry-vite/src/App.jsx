import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { Alert } from "reactstrap";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [text, setText] = useState('dark'); 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      setText("light")
      document.body.style.backgroundColor = "Purple";
    }else{
      setMode("light"); 
      setText("dark");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* =========Props========= */}
      <Navbar title="TextUtils" About="About" mode={mode} text={text} toggleMode={toggleMode} />
      <Alert />
      {/* =========DefaultProps========= */}
      {/* <Navbar /> */}
      {/* ================TextForm.jsx============== */}
      <div className="container">
        <TextForm heading="Enter The Text To Analyze" />
      </div>
    </>
  );
}

export default App;
