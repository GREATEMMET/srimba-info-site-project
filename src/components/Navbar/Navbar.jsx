import "./Navbar.scss";

import navLogo from "../../assets/png/react-blue.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navLogo} alt="" className="navLogo" />
      <h1 className="navTitle">ReactFacts</h1>
      <h3 className="navProject">React Course - Project 1</h3>
    </div>
  );
}
