import vector from "../assets/Vector.png";
import style from "./Cover.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";
import Backlay from "../components/Backlay";
import { useState } from "react";
const Cover = () => {
  const [showBacklay, setShowBacklay] = useState(false);
  const backlayHandler = (hide) => {
    console.log(hide);
    setShowBacklay(!hide);
  };
  return (
    <div className={style.CoverPage}>
      <div className={style.background}>
        <Header backlay={backlayHandler} />
        <MainBody />
        <Footer />
        {showBacklay && <Backlay />}
      </div>
    </div>
  );
};

export default Cover;
