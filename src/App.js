import "./App.css";
import Cover from "./pages/Cover";
import "./fonts/fonts.css";
import GoogleIcons from "./assets/GoogleIcons";
import Payments from "./pages/Payments";
import Banking from "./pages/Banking";
import CashCard from "./pages/CashCard";
import Investing from "./pages/Investing";

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
