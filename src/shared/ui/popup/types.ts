import { ModalProps } from "../modal";

export interface PopupProps extends ModalProps {
  rootClassName?: string;
}

export interface CloseProps {
  className?: string;
  onClick: () => void;
}
