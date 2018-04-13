import React from "react";
import './index.css';

export default function({children}) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}