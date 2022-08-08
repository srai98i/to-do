import "./App.css";
import Button from "../Button";

import Input from "../Input";
import List from "../List";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function getListItem(e) {
    const newInput = e.target.value;

    setInput(newInput);
  }

  function addToList() {
    setList([input, ...list]);
  }
  function clearList() {
    setList([]);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header"> To-Do List </h1>
      </div>
      <br />
      <div className="submit-form">
        <div className="submit-input">
          <Input className="input" onChange={getListItem} />
        </div>
        <div className="submit-button-div">
          <Button
            className="submit-button"
            handleClick={addToList}
            text="Submit"
          />
        </div>
      </div>
      <div className="rendered-list">
        <div className="list-item">
          <List listItem={list} />
        </div>
        <Button
          className="delete-button"
          handleClick={clearList}
          text="Delete All"
        />
      </div>
    </div>
  );
}

export default App;
