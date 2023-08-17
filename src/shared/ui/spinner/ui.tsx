import { CSSProperties } from "react";
import clsx from "clsx";
import { ISpinnerProps } from "./types";
import styles from "./styles.module.sass"

export const Spinner = ({className, size = 50, r = 20, stroke = "#fff", strokeWidth = 5}: ISpinnerProps) => (
  <div className={clsx(styles.spinner, className)} style={{"--spinner-size": `${size}px`} as CSSProperties} >
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={stroke} fill="none" strokeWidth={strokeWidth} />
      </svg>
  </div>
);
