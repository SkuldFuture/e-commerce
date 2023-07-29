import { FC } from "react";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;