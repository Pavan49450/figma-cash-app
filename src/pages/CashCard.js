import style from "./Cover.module.css";
import CashCardMainBody from "../components/CashCardMainBody";
const CashCard = () => {
  return (
    <div className={style.paymentsSection} style={{ backgroundColor: "black" }}>
      <CashCardMainBody />
    </div>
  );
};

export default CashCard;
