import React from "react";
import "./List.css";
import Button from "../Button";

function ListMapped({ listItem, className, handleClick, buttonId }) {
  return (
    <ul className={className}>
      <div className="list-line" id={buttonId}>
        <li className="list">{listItem}</li>
        <input className="checkbox" type="checkbox" />
        <Button
          className="button-for-delete"
          text="Delete"
          handleClick={handleClick}
        />
      </div>
    </ul>
  );
}

export default ListMapped;
