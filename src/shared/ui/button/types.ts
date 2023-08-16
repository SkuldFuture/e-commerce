import { type ElementType, ReactNode, ComponentProps } from "react";

interface IButtonOwnProps<E extends ElementType = ElementType> {
  className?: string;
  loading?: boolean;
  skeletonLoading?: boolean;
  rounded?: boolean;
  gradient?: boolean;
  size?: "small" | "regular" | "medium" | "big" | "large";
  variant?: "primary" | "white" | "gray" | "glass";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  as?: E;
}

const defaultProps: IButtonOwnProps = {
  variant: "primary",
  size: "regular",
  skeletonLoading: false,
  children: "Button",
};

export const DEFAULT_ELEMENT: ElementType = "button";

export type ButtonProps<E extends ElementType> = IButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof IButtonOwnProps>;
