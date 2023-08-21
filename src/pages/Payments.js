import style from "./Page.module.css";
import PaymentsMainBody from "../components/Payments/PaymentsMainBody";

const Payments = () => {
  return (
    <div className={style.paymentsSection} style={{ backgroundColor: "white" }}>
      <PaymentsMainBody />
    </div>
  );
};

export default Payments;
