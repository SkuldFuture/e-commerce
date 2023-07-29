import { FC } from "react";
import { IInputProps } from "./Input.types";

const Input: FC<IInputProps> = ({
  className,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      Input
    </input>
  );
};

export default Input;
