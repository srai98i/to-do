import React from "react";
import "./List.css";
import Button from "../Button";

function List({ listItem, className }) {
  return (
    <ul className={className}>
      {listItem.map((list) => (
        <div className="list-line">
          {/* <div className="task"> */}{" "}
          {/* took out div to make text stretch width of list-line*/}
          <li className="list">{list}</li>
          {/* </div>{" "} */}
          <div className="list-buttons">
            {/* <div className="tick"> */}{" "}
            {/*took out div because interfered with align items center of list-buttons*/}
            <input className="checkbox" type="checkbox" />
            {/* </div> */}
            {/* <div className="delete-list-button"> */}
            <Button className="button-for-delete" text="Delete" />
            {/* </div> */}
            {/* <div className="edit-button"> 
              <Button className="button-for-edit" text="Edit" />
            </div> */}{" "}
            {/*took out div because functionality not available without backend  */}
          </div>
        </div>
      ))}
    </ul>
  );
}

export default List;
