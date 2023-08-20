import style from "./PaymentsMainBody.module.css";
import phone from "../assets/payments_phoneM.png";
import floor from "../assets/payments_floor 1.png";
import pillarL from "../assets/payments-pillar-large.png";
import pillarM from "../assets/payments-pillar-medium.png";
import pillarS from "../assets/payments-pillar-small.png";
import collumn1 from "../assets/payments-column-1.png";
import collumn2 from "../assets/payments-column-2.png";
import collumn3 from "../assets/payments-column-3.png";
import "../fonts/fonts.css";

const PaymentsMainBody = () => {
  return (
    <div className={style.paymentsMainBody}>
      <div className={style.paymentsMainBody__content}>
        <div className={style.paymentsMainBody__content_data}>
          <h1>Payments</h1>
          <p>
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <div className={style.paymentsMainBody__content_image}>
          <img src={phone} alt="Payments phone mockup"></img>
        </div>
      </div>
      <div>
        <div className={style.paymentsMainBody__floor}>
          {/* <img src={floor} alt="Floor Image"></img> */}
        </div>
        <div style={{ position: "relative" }}>
          <div className={style.PaymentsMainBody__belowContent_pillarS}>
            <img src={pillarS} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_pillarM_1}>
            <img src={pillarM} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_pillarM_2}>
            <img src={pillarM} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_pillarM_3}>
            <img src={pillarM} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_pillarM_4}>
            <img src={pillarM} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_pillarL}>
            <img src={pillarL} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_collumn_1}>
            <img src={collumn1} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_collumn_2}>
            <img src={collumn2} alt="image"></img>
          </div>
          <div className={style.PaymentsMainBody__belowContent_collumn_3}>
            <img src={collumn3} alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMainBody;
