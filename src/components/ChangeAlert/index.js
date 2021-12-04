import React from "react";
import './ChangeAlert.css';
import { withStorageListener } from "./withStorageListener";
import { Modal } from "../Modal";

function ChangeAlert({ languageSupport, show, toggleShow }) {
    
    const textContent = languageSupport.ChangeAlert;

    if (show) {
        return (
            <Modal>
                <div className="change-alert">
                    <p>{textContent.one}</p>
                    <button
                        onClick={() => toggleShow()}    
                    >{textContent.two}</button>
                </div>
            </Modal>
        );
    } else {
        return null;
    }
}
    

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };