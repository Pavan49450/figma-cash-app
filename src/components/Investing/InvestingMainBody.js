import style from "./InvestingMainBody.module.css";
import floor from "../../assets/Group.png";
import graph1 from "../../assets/investing-graph-1.png";
import graph2 from "../../assets/investing-graph-2.png";
import graph3 from "../../assets/investing-graph-3.png";
import stocks from "../../assets/investing-stocks.png";
import bitcoin from "../../assets/investing-bitcoin.png";
import "../../fonts/fonts.css";

const InvestingMainBody = () => {
  return (
    <div className={style.InvestingMainBody}>
      <div className={style.InvestingMainBody__ContentSection}>
        <div className={style.InvestingMainBody__ContentSection__title}>
          <h1>Investing</h1>
        </div>
        <div
          className={style.InvestingMainBody__ContentSection__investingMethods}
        >
          <div className={style.InvestingMainBody__ContentSection__stocks}>
            <div
              className={
                style.InvestingMainBody__ContentSection__stocks_content
              }
            >
              <h3>Stocks</h3>
              <p>
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <div
              className={style.InvestingMainBody__ContentSection__stocks_image}
            >
              <img src={stocks} alt="Stocks Mockup"></img>
            </div>
          </div>
          <div className={style.InvestingMainBody__ContentSection__bitcoin}>
            <div
              className={style.InvestingMainBody__ContentSection__bitcoin_image}
            >
              <img src={bitcoin} alt="Bitcoin mockup"></img>
            </div>
            <div
              className={
                style.InvestingMainBody__ContentSection__bitcoin_content
              }
            >
              <h3>Bitcoin</h3>
              <p>
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.InvestingMainBody__floor}>
        <img src={floor} alt="floor picture"></img>
      </div>
      <div className={style.InvestingMainBody__graphs}>
        <div className={style.InvestingMainBody__graphs1}>
          <img
            src={graph1}
            alt="Investing graph"
            // style={{ width: "660px", height: "283px" }}
          ></img>
        </div>
        <div className={style.InvestingMainBody__graphs2}>
          <div>
            <img
              src={graph2}
              alt="Investing graph"
              className={style.InvestingMainBody__graphs2_1}
              // style={{ width: "237px", height: "411px" }}
            ></img>
          </div>
          <div>
            <img
              src={graph3}
              alt="Investing graph"
              className={style.InvestingMainBody__graphs2_2}

              // style={{ width: "408px", height: "269px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestingMainBody;
