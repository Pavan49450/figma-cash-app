import style from "./Page.module.css";
import CashCardMainBody from "../components/CashCardMainBody";
const CashCard = () => {
  return (
    <div className={style.cashCardSection} style={{ backgroundColor: "black" }}>
      <CashCardMainBody />
    </div>
  );
};

export default CashCard;
