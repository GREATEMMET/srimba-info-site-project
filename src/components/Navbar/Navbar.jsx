import "./Navbar.scss";

import navLogo from "../../assets/png/react-blue.png";
export default function Navbar(props) {
  return (
    <div className={`navbar ${props.darkMode ? "dark" : ""}`}>
      <img src={navLogo} alt="" className="navLogo" />
      <h1 className="navTitle">ReactFacts</h1>
      <div className="navProject">
        <div className="navToggler">
          <p>Light</p>
          <div className="navToggleSlider">
            <div className="navToggleSliderCircle"></div>
          </div>
          <p>Dark</p>
        </div>
      </div>
    </div>
  );
}
