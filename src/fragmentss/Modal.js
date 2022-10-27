import * as ReactDOM from "react-dom";
import React from "react";
// import { useState }from "react";

export const Modal =({message, isOpen,onClose,Children})=>{
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal">
            <span>{message}</span>
            <button onClick={onClose}>Close</button>
            
        </div>,
        document.body
        )

}
