import logo from "../../assets/logo.svg";
import style from "./Header.module.css";
import eyeImage from "../../assets/Layer 2.svg";
import { useState, useEffect } from "react";
import "../../fonts/fonts.css";

const Header = ({ backlay }) => {
  const [hide, setHide] = useState(false);

  const toggleHandler = () => {
    setHide(!hide);
    backlay(hide);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 850;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className={style.Header}>
      <div className={style.Header__logo}>
        <img src={logo} alt="logo"></img>
      </div>
      {width < breakpoint && !hide && (
        <div className={style.hamburger} style={{ marginTop: "20px" }}>
          <span
            class="material-symbols-outlined"
            onClick={toggleHandler}
            title="MenuBar"
          >
            menu
          </span>
        </div>
      )}
      <div
        className={`${style.Header__menuBar}  ${
          width < breakpoint && !hide ? style.hide : ""
        }`}
      >
        {width < breakpoint && (
          <div className={style.closeBtn}>
            <span
              class="material-symbols-outlined"
              onClick={toggleHandler}
              title="MenuBar"
            >
              Close
            </span>
          </div>
        )}
        <div className={style.Header__menuBar_element}>Sign In</div>
        <div className={style.Header__menuBar_element}>Legal</div>
        <div className={style.Header__menuBar_element}>Licenses</div>
        <div className={style.Header__menuBar_element}>Security</div>
        <div className={style.Header__menuBar_element}>Careers</div>
        <div className={style.Header__menuBar_element}>Press</div>
        <div className={style.Header__menuBar_element}>Support</div>
        <div className={style.Header__menuBar_element}>Status</div>
        <div className={style.Header__menuBar_element}>Codeblog</div>
      </div>
      <div className={style.Header__eyeImage}>
        <img src={eyeImage}></img>
      </div>
    </div>
  );
};

export default Header;
