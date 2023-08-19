import "./App.css";
import Cover from "./pages/Cover";
import "./fonts/fonts.css";
import GoogleIcons from "./assets/GoogleIcons";

const App = () => {
  return (
    <div className="App" style={{ fontFamily: "customFont" }}>
      <Cover />
      <GoogleIcons />
    </div>
  );
};

export default App;
