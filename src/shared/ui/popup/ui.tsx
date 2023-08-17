import clsx from "clsx"
import { Modal } from "@/shared/ui/modal"
import { PopupProps, CloseProps } from "./types"
import styles from "./styles.module.sass"
import { Icon } from "@/shared/ui/icon"

export const Popup = ({ rootClassName, className, close, children, ...props }: PopupProps) => {
  return (
    <Modal
        className={clsx(styles.modal, rootClassName)}
        onClick={close} 
        close={close}
        {...props}
    >
        <div 
            className={clsx(styles.container, className)}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>
    </Modal>
  )
}

const ClosePopup = ({ onClick, className }: CloseProps) => (
    <button onClick={onClick} className={clsx('btn-reset', styles.close, className)} >
        <Icon type="common" name="close" />
    </button>
)

Popup.Close = ClosePopup
