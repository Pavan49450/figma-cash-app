import vector from "../assets/Vector.png";
import style from "./Cover.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";
const Cover = () => {
  return (
    <div className={style.CoverPage}>
      <img src={vector} alt="vector" className={style.backgroundImage}></img>
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Cover;
