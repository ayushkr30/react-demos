import { useRef } from "react";

import React from 'react'

const Refer = () => {
    const inputElement = useRef(null);

    const focusInput = () => {
       inputElement.current.focus();
      // inputElement.current.value = "Ayush";
    };

  return (
    <div>
        <input type="text" ref={inputElement} placeholder="Click the button to focus" />
        <button onClickCapture={()=> focusInput()}>Focus</button>
    </div>
  )
}

export default Refer