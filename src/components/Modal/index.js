import React from "react";
import ReactDom from "react-dom";
import { TodoForm } from "../TodoForm";
import './Modal.css'

function Modal({ children }) {
    return ReactDom.createPortal(
        <div className="ModalBackground">
            <TodoForm />
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };