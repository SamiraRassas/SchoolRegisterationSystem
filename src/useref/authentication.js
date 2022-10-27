import React, { useState, useEffect, useRef } from "react";

export const Authentication = () => {
  const [inputState, setInputState] = useState(""); //the initial value I insert in input feild
  const [disabled, setDisabled] = useState(false);
  const inputValue = useRef(null);
  const timeValue = useRef(false);
  var timer;

  const handleInput = (event) => setInputState(event.target.value); //what i insert in input field
  function disablebtn() {
    if (inputState !== "") {
      clearTimeout(timer);
    }
    setDisabled(true)
    timeValue.current.setAttribute("disabled", true);
  }
  useEffect(() => {
    timer = setTimeout(disablebtn, 2000);
    console.log(inputState);
    inputValue.current.style.backgroundColor = inputState; //change the background color based on the color in input field
  });
  //according to what in text field
  return (
    <>
      <label>UserName: </label>
      <input id="username" ref={inputValue} onChange={handleInput}></input>{" "}
      <br />
      <label>Password: </label>
      <input id="password"></input> <br />
      <button id="submit" ref={timeValue}>
        Submit
      </button>{" "}
      <br />
    </>
  );
};
