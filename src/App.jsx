import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggle() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggledDarkMode={toggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
