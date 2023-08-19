import style from "./Cover.module.css";
import BankingMainBody from "../components/BankingMainBody";
const Banking = () => {
  return (
    <div
      className={style.paymentsSection}
      style={{ backgroundColor: "#00D54B" }}
    >
      <BankingMainBody />
    </div>
  );
};

export default Banking;
