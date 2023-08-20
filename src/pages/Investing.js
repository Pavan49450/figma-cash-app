import style from "./Page.module.css";
import InvestingMainBody from "../components/InvestingMainBody";
import Footer from "../components/Footer";
const Investing = () => {
  const footerStyles = {
    storeIconDiv: { backgroundColor: "white", border: "1px solid black" },
    storeIcon: { color: "black" },
  };
  return (
    <div
      className={style.investingSection}
      style={{ backgroundColor: "#00D54B" }}
    >
      <div className={style.background}>
        <InvestingMainBody />
        <Footer style={{ top: "3540px" }} styles={footerStyles} />
      </div>
    </div>
  );
};

export default Investing;
