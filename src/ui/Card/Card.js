import { Children } from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${style.Card} ${props.className}`}>{Children.props}</div>
  );
};

export default Card;
