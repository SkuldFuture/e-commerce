import { FC } from "react";
import { ICardProps } from "./Cart.types";

const Card:FC<ICardProps> = ({ className }) => {
  return <div className={className}>Card</div>;
};

export default Card;
