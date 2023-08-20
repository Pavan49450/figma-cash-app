import style from "./Footer.module.css";
import appleIcon from "../assets/Apple.svg";
import googleIcon from "../assets/google.svg";
import vector from "../assets/Vector.svg";
import frame from "../assets/Frame.svg";
import frameB from "../assets/FrameB.png";
import instaB from "../assets/instaB.png";
import twitter from "../assets/twitter.svg";
import twitterB from "../assets/twitterB.png";
import instaIcon from "../assets/insta.png";
import { useState, useEffect } from "react";

const Footer = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    console.log(width);
  }, []);

  return (
    <div className={style.Footer} style={props.style}>
      <div className={style.Footer__right}>
        <div
          className={style.Footer__appleIcon}
          style={props.styles && props.styles.storeIconDiv}
        >
          <img src={appleIcon} alt="apple icon"></img>

          <h3 style={props.styles && props.styles.storeIcon}>APP STORE</h3>
        </div>
        <div
          className={style.Footer__googleIcon}
          style={props.styles && props.styles.storeIconDiv}
        >
          <img src={googleIcon} alt="google icon"></img>

          <h4 style={props.styles && props.styles.storeIcon}>GOOGLE PLAY</h4>
        </div>
      </div>
      {width > breakpoint && (
        <div className={style.Footer__vector}>
          <img src={vector} alt="vector.svg"></img>
        </div>
      )}
      <div className={style.Footer__left}>
        <div className={style.Footer__policyText}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </div>
        <div className={style.socialIcons}>
          <img src={props.styles ? frameB : frame} alt="frameIcon"></img>
          <img src={props.styles ? twitterB : twitter} alt="twitterIcon"></img>
          <img src={props.styles ? instaB : instaIcon} alt="InstaIcon"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
