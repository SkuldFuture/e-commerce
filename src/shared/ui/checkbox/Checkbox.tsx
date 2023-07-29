import { FC } from "react";
import { ICheckboxProps } from "./Checkbox.types";

export const Checkbox: FC<ICheckboxProps> = ({
  className,
  onChange,
  checked,
}) => {
  return (
    <label>
      <input className={className} onChange={onChange} checked={checked}>
        Checkbox
      </input>
    </label>
  );
};
