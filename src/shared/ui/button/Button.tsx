import { FC } from "react";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
        {`asddsa${text}`}
    </button>
  )
}

export default Button;