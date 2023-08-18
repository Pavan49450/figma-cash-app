import style from "./Footer.module.css";
import appleIcon from "../assets/Apple.svg";
import googleIcon from "../assets/google.svg";
import vector from "../assets/Vector.svg";
import frame from "../assets/Frame.svg";
import twitterIcon from "../assets/twitter.svg";
import instaIcon from "../assets/insta.png";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Footer__right}>
        <div className={style.Footer__appleIcon}>
          <img src={appleIcon} alt="apple icon"></img>
          <h3>APP STORE</h3>
        </div>
        <div className={style.Footer__googleIcon}>
          <img src={googleIcon} alt="google icon"></img>
          <h4>GOOGLE PLAY</h4>
        </div>
      </div>
      <div className={style.Footer__vector}>
        <img src={vector} alt="vector.svg"></img>
      </div>
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
          <img src={frame} alt="frameIcon"></img>
          <img src={twitterIcon} alt="twitterIcon"></img>
          <img src={instaIcon} alt="InstaIcon"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
