import style from "./Cover.module.css";
import PaymentsMainBody from "../components/PaymentsMainBody";

const Payments = () => {
  return (
    <div className={style.paymentsSection} style={{ backgroundColor: "white" }}>
      <PaymentsMainBody />
    </div>
  );
};

export default Payments;
