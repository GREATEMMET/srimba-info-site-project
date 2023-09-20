import "./Main.scss";
import React from "react";

import sideLogo from "../../assets/png/react-side-img.png";

export default function Main() {
  return (
    <div className="main">
      <h1 className="mainHeading">Fun Facts About React</h1>
      <ul className="listItems">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={sideLogo} alt="" className="sideLogo" />
    </div>
  );
}
