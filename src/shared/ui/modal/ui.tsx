'use client'

import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";
import { CSSTransition } from "react-transition-group"
import { Portal } from "../portal";
import styles from "./styles.module.sass"
import { ModalProps } from "./types";
import { useEscape } from "./lib/useEscape/useEscape";
import { useLockedBody } from "@/shared/lib/modal";

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  function Modal({isOpen, close, children, className, ...props}, ref) {
    useLockedBody(isOpen);

    useEscape(close);

    return (
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames={{enterDone: styles.done}}
      >
        <Portal rootId="#modal">
          {isOpen && (
            <div className={clsx(styles.modal, className)} ref={ref} {...props}>
              {children}
            </div>
          )}
        </Portal>
      </CSSTransition>
    )
  }
)