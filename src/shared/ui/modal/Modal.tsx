import { FC } from 'react'
import { IModalProps } from './Modal.types'

export const Modal:FC<IModalProps> = ({ className, title, onClick, isOpen, children }) => {
  return (
    <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h3>{title}</h3>
        <button className="modal-close" onClick={onClick}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
  </div>
  )
}
