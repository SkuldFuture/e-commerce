import { FC } from "react";
import { IButtonProps } from "./Button.types";
import styles from "./Button.module.sass"

const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;