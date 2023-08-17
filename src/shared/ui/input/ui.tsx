'use client'
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { IInputProps } from "./types";
import { Icon } from "@/shared/ui/icon";
import styles from "./styles.module.sass";

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { className, hasError, placeholder, onClear, value, ...props },
  ref
) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleOnBlur = () => {
    if (value === "") {
      setIsFocus(false);
    }
  };

  return (
    <div className={clsx(styles.field, className)}>
      <label className={clsx(styles.label, hasError && styles.error)}>
        <span className={clsx(styles.placeholder, isFocus && styles.isFocus)}>
          {placeholder}
        </span>
        <input
          className={clsx(
            "input-reset",
            isFocus && styles.isFocus,
            onClear && styles.clear,
            styles.input
          )}
          ref={ref}
          onFocus={() => setIsFocus(true)}
          onBlur={handleOnBlur}
          value={value}
          {...props}
        />
      </label>
      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className={clsx(
            "btn-reset",
            value && styles.visible,
            styles.clearBtn
          )}
        >
          <Icon type="common" name="close" />
        </button>
      )}
    </div>
  );
});
