import './App.css';
import Button from '../Button';
import Header from '../Header';
import Input from '../Input';
import List from '../List';
import {useState} from 'react'



function App() {

  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  function getListItem(e) {
    const newInput = e.target.value
    setInput(newInput)
  }

  function addToList() {
    setList([input, ...list])

  }
  function clearList() {
    setList([])
   
  }



  return (
    <div className="App">
    <Header text="To-Do List"/>
    <br/>
    <Input onChange={getListItem}/>
    <Button handleClick={addToList} text="Submit"/>
    <List listItem={list}/>
    <Button handleClick={clearList} text="Delete All"/>
    </div>
  );
}

export default App;

 