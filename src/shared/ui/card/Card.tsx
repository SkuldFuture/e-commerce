import { FC } from "react";
import { ICardProps } from "./Card.types";

const Card:FC<ICardProps> = ({ className }) => {
  return <div className={className}>Card</div>;
};

export default Card;
