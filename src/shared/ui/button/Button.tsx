import { FC } from "react";
import { IButtonProps } from "./Button.types";
import styles from "./styles.module.sass"

const Button: FC<IButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;