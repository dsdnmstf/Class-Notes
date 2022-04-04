import React from "react";
import { useEffect, useRef } from "react";
const UseRefComponent = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  useEffect(() => {
    // document.querySelector("input").focus();
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "gray";
    inputRef.current.style.color = "white";
  }, []);
  return (
    <div>
      <h2>USREF</h2>
      <input ref={inputRef} type="text" placeholder="Enter your text" />
    </div>
  );
};

export default UseRefComponent;
