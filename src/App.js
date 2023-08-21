import "./App.css";
import Cover from "./Sections/Cover";
import "./fonts/fonts.css";
import GoogleIcons from "./assets/GoogleIcons";
import Payments from "./Sections/Payments";
import Banking from "./Sections/Banking";
import CashCard from "./Sections/CashCard";
import Investing from "./Sections/Investing";

const App = () => {
  return (
    <div className="App" style={{ fontFamily: "customFont" }}>
      <Cover />
      <Payments />
      <Banking />
      <CashCard />
      <Investing />
      <GoogleIcons />
    </div>
  );
};

export default App;
