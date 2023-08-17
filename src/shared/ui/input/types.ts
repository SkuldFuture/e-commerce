import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  hasError?: boolean;
  onClear?: () => void;
}
