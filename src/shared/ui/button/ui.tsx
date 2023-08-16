import { forwardRef } from "react";
import { ButtonProps, defa, DEFAULT_ELEMENT } from "./types";
import styles from "./styles.module.sass"
import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, ButtonProps<typeof DEFAULT_ELEMENT>>(
  function Button(
    {
      className,
      loading,
      skeletonLoading,
      rounded,
      gradient,
      size,
      variant,
      startIcon,
      endIcon,
      children,
      as,
      ...props
    },
    ref,
  ) {
    const ButtonSpinner = (
      <div className={styles.spinner}>
        Spinner
      </div>
    );

    const Element = as || DEFAULT_ELEMENT;

    return (
      <Element
        ref={ref}
        className={clsx(
          "button",
          styles.button,
          {
            [styles.rounded]: rounded,
            [styles.skeleton]: skeletonLoading,
            [styles.gradient]: gradient,
          },
          styles[variant!],
          styles[size!],
          className,
        )}
        {...props}
      >
        {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
        <span>{loading ? ButtonSpinner : children}</span>
        {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      </Element>
    )
  }
)