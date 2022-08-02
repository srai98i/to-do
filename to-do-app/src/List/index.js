import React from "react";
import "./List.css";

function List({ listItem, className }) {
  return (
    <ul className={className}>
      {listItem.map((list) => (
        <div className="list-line">
          <div className="task">
            <li className="list">{list}</li>
          </div>{" "}
          <div className="tick">
            <input className="checkbox" type="checkbox" />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default List;
