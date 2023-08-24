import style from "./BankingMainBody.module.css";
import phone from "../../assets/banking-phone.png";
import hole1 from "../../assets/banking-hole-1.png";
import hole2 from "../../assets/banking-hole-2.png";
import ramp1 from "../../assets/banking-ramp-1.png";
import ramp2 from "../../assets/banking-ramp-2.png";
import track1 from "../../assets/banking-track-1.png";
import track2 from "../../assets/banking-track-2.png";
import stairs_1 from "../../assets/banking-stairs-1.png";
import stairs_2 from "../../assets/banking-stairs-2.png";
import monster from "../../assets/banking-monster.png";
import tube from "../../assets/banking-tube.png";
import collumn from "../../assets/banking-column.png";
import "../../fonts/fonts.css";

const BankingMainBody = () => {
  return (
    <div className={style.BankingMainBody}>
      <div className={style.BankingMainBody__images}>
        <div className={style.BankingMainBody__content_data}>
          <h1>Banking</h1>
          <p>
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </p>
        </div>
        <div className={style.BankingMainBody__content_image}>
          <img src={phone} alt="banking phone mockup"></img>
        </div>
        <div className={style.BankingMainBody__hole1}>
          <img src={hole1} alt="hole1"></img>
        </div>
        <div className={style.BankingMainBody__hole2}>
          <img src={hole2} alt="hole2"></img>
        </div>
        <div className={style.BankingMainBody__stairs1}>
          <img src={stairs_1} alt="stairs1"></img>
        </div>
        <div className={style.BankingMainBody__stairs2}>
          <img src={stairs_2} alt="stairs2"></img>
        </div>
        <div className={style.BankingMainBody__track1}>
          <img src={track1} alt="track1"></img>
        </div>
        <div className={style.BankingMainBody__track2}>
          <img src={track2} alt="track2"></img>
        </div>
        <div className={style.BankingMainBody__tube}>
          <img src={tube} alt="tube"></img>
        </div>
        <div className={style.BankingMainBody__monster}>
          <img src={monster} alt="monster"></img>
        </div>
        <div className={style.BankingMainBody__ramp1}>
          <img src={ramp1} alt="ramp1"></img>
        </div>
        <div className={style.BankingMainBody__ramp2}>
          <img src={ramp2} alt="ramp2"></img>
        </div>
        <div className={style.BankingMainBody__collumn}>
          <img src={collumn} alt="collumn"></img>
        </div>
      </div>
    </div>
  );
};

export default BankingMainBody;
