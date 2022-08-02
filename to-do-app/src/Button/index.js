import React from "react";

function Button({ text, handleClick, className }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
