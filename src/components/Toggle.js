import React, { useState } from "react";

function Toggle() {
  const[mode, setMode] = useState(false);

  function handleClick(){
    setMode(mode=> !mode)
  }

  const color = mode ? 'red' : 'white';

  return <button style={{baackground: color }} onClick={handleClick}>{mode ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
