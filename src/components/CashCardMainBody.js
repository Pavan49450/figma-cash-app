import style from "./CashCardMainBody.module.css";
import phone from "../assets/boost-phone.png";
import hand from "../assets/boost-hand.png";
import coffee from "../assets/boost-coffee.png";
import card from "../assets/boost-card.png";
import burger from "../assets/boost-burger.png";
import shoe from "../assets/boost-shoe.png";
import stairs_1 from "../assets/boost-stairs-1.png";
import stairs_2 from "../assets/boost-stairs-2.png";
import "../fonts/fonts.css";

const CashCardMainBody = () => {
  return (
    <div className={style.CashCardMainBody}>
      <div className={style.CashCardMainBody__content}>
        <div className={style.CashCardMainBody__content_data}>
          <h1>Cash Card & boast</h1>
          <p>
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <div className={style.CashCardMainBody__content_image}>
          <img src={phone} alt="Payments phone mockup"></img>
        </div>
      </div>
      <div className={style.CashCardMainBody_images}>
        <div className={style.CashCardMainBody__staris_1}>
          <img src={stairs_1} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__stairs_2}>
          <img src={stairs_2} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__hand}>
          <img src={hand} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__coffee}>
          <img src={coffee} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__shoe}>
          <img src={shoe} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__burger}>
          <img src={burger} alt="image"></img>
        </div>
        <div className={style.CashCardMainBody__card}>
          <img src={card} alt="image"></img>
        </div>
      </div>
    </div>
  );
};

export default CashCardMainBody;
