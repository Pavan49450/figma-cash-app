import style from "./MainBody.module.css";
import introCube from "../assets/intro-cube 1.png";
import introCubes from "../assets/intro-cubes 1.png";
import introStairs from "../assets/intro-stairs 1.png";
import introPhone from "../assets/intro-phone 1.png";
import introPillar from "../assets/intro-pillar 1.png";
import vector from "../assets/Vector.svg";
import "../fonts/fonts.css";

const MainBody = () => {
  return (
    <div className={style.MainBody}>
      <div className={style.MainBody__titleSection}>
        <div className={style.MainBody__title}>
          <h1
            className={style.MainBody__titleSection1}
            style={{ fontFamily: "customFontGH" }}
          >
            CASH
          </h1>
          <h1
            className={style.MainBody__titleSection2}
            style={{ fontFamily: "customFontGH" }}
          >
            APP
          </h1>
        </div>

        <div className={style.MainBody__phone}>
          <img src={introPhone} alt=""></img>
        </div>
      </div>
      {/* <div style={{ display: "flex" }}> */}
      <img src={introCube} alt="" className={style.MainBody__cube}></img>
      <img src={introStairs} alt="" className={style.MainBody__stairs}></img>
      {/* </div> */}
      <img src={introCubes} alt="" className={style.MainBody__cubes}></img>
      <img src={introPillar} alt="" className={style.MainBody__pillar}></img>
      {/* <img
        src={vector}
        alt="vector.svg"
        className={style.MainBody__vector}
      ></img> */}
    </div>
  );
};

export default MainBody;
