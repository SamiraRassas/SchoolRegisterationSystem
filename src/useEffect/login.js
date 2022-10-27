import React from "react";
import { useEffect, useState ,useRef} from "react";
export const Login = () => {
  const [color, setColor] = useState("blue");

  const handlleClick = () => {
    setColor("aqua");
  };
  useEffect(() => {}, [color]);

  // handlleClick,color);
//   document.body.style.background = color
  return (
    <>
      <input
        id="in"
        style={{ backgroundColor: color }}
        onClick={handlleClick}
      ></input>
      <input></input>
    </>
  );
};
