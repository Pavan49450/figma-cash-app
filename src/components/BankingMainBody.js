import style from "./BankingMainBody.module.css";

import "../fonts/fonts.css";

const BankingMainBody = () => {
  return (
    <div className={style.MainBody}>
      <div>
        <div>
          <h1>Banking</h1>
          <p>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div>
          <img src={null} alt="Payments phone mockup"></img>
        </div>
      </div>
    </div>
  );
};

export default BankingMainBody;
