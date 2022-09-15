import "./App.css";
import Button from "../Button";
import ListMapped from "../List/List";
import Input from "../Input";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([{ id: "", task: "" }]);

  function getListItem(e) {
    const newInput = e.target.value;

    setInput(newInput);
  }

  function addToList() {
    setList([...list, { id: input, task: input }]);
    console.log(list);
  }
  function clearList() {
    setList([]);
  }

  function deleteItem(e) {
    console.log(e.target.parentElement.id);
    let idDelete = e.target.parentElement.id;
    let deletedItem = list.filter((x) => {
      return x.id !== idDelete;
    });
    setList(deletedItem);
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
      {list.map((task, index) => {
        return (
          <div key={index} className="rendered-list">
            <ListMapped
              listItem={task.task}
              handleClick={deleteItem}
              buttonId={task.id}
            />
          </div>
        );
      })}
      <Button
        className="delete-button"
        handleClick={clearList}
        text="Clear All"
      />
    </div>
  );
}

export default App;
