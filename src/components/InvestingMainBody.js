import style from "./InvestingMainBody.module.css";
import floor from "../assets/Group.png";
import "../fonts/fonts.css";

const InvestingMainBody = () => {
  return (
    <div className={style.InvestingMainBody}>
      <div className={style.InvestingMainBody__floor}>
        <img src={floor} alt="floor picture"></img>
      </div>
    </div>
  );
};

export default InvestingMainBody;
