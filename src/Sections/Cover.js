import style from "./Page.module.css";
import Header from "../components/Cover/Header";
import Footer from "../components/Cover/Footer";
import MainBody from "../components/Cover/MainBody";
import Backlay from "../components/Backlay/Backlay";
import { useState } from "react";
const Cover = () => {
  const [showBacklay, setShowBacklay] = useState(false);
  const backlayHandler = (hide) => {
    console.log(hide);
    setShowBacklay(!hide);
  };
  return (
    <div className={style.coverSection}>
      <div className={style.background}>
        <Header backlay={backlayHandler} />
        <MainBody />
        <Footer />
        {/* <img src={vector} className={style.backgroundImage}></img> */}
        {showBacklay && <Backlay />}
      </div>
    </div>
  );
};

export default Cover;
