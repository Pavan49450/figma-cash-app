import style from "./Cover.module.css";
import InvestingMainBody from "../components/InvestingMainBody";
import Footer from "../components/Footer";
const Investing = () => {
  return (
    <div
      className={style.paymentsSection}
      style={{ backgroundColor: "#00D54B" }}
    >
      <div className={style.background}>
        <InvestingMainBody />
        <Footer style={{ top: "369%" }} />
      </div>
    </div>
  );
};

export default Investing;
