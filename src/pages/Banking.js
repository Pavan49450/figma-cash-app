import style from "./Page.module.css";
import BankingMainBody from "../components/BankingMainBody";
const Banking = () => {
  return (
    <div
      className={style.bankingSection}
      style={{ backgroundColor: "#00D54B" }}
    >
      <BankingMainBody />
    </div>
  );
};

export default Banking;
