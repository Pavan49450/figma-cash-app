import logo from "../assets/logo.svg";
import style from "./Header.module.css";
import eyeImage from "../assets/Layer 2.svg";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.Header__logo}>
        <img src={logo} alt="logo"></img>
      </div>
      <ul className={style.Header__menuBar}>
        <li>
          <a href="#">SIGN IN</a>
        </li>
        <li>
          <a href="#">LEGAL</a>
        </li>
        <li>
          <a href="#">LICENSES</a>
        </li>
        <li>
          <a href="#">SECUIRTY</a>
        </li>

        <li>
          <a href="#">CAREERS</a>
        </li>
        <li>
          <a href="#">PRESS</a>
        </li>
        <li>
          <a href="#">SUPPORT</a>
        </li>
        <li>
          <a href="#">STATUS</a>
        </li>
        <li>
          <a href="#">CODEBLOG</a>
        </li>
      </ul>
      <div className={style.Header__eyeImage}>
        <img src={eyeImage}></img>
      </div>
    </div>
  );
};

export default Header;
